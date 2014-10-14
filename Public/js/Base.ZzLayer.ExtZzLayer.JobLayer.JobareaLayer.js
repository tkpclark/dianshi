(function() {
	/*
	 *Author Liyao
	 *Date 2009-4-8
	 *Function JobareaLayer class extends JobLayer class
	 */
	
	//check the class name , it will be replaced when existed
	if ( window.JobareaLayer ) {
		alert( 'variable JobareaLayer has been used,it will be replaced with _JobareaLayer!' );
		window._JobareaLayer = window.JobareaLayer;
	}

	//constructor
	window.JobareaLayer = function( param ) {
		param = param instanceof Object ? param : {};
		
		param.colNum = param.colNum || 10;
		if ( param.extData ) {//处理居住地的情况		
			param.data = ja.clone();
			for ( var p in param.extData ) {
				if ( /^[\d]{6}$/.test( p ) ) {
					param.data[p] = param.extData[p];
				}
			}
			//this.mainCity[8].subIds[0] = '9900';
			param.headTitle = param.cfg.langs.juzd;
		}
		else {
		   //this.mainCity[8].subIds[0] = '030200';
			param.data = ja;
			param.headTitle = param.cfg.langs.gzdd;
		}
		this.noShowSpArea = param.noShowSpArea == undefined ? false : param.noShowSpArea;
		if(param.showPvnCityDistrict != undefined && param.showPvnCityDistrict)
		{
			param.showDistrictData=[
					{province:'030000',city:['030200','030800']},
					{province:'070000',city:['070200','070300','070400','070500']},
					{province:'080000',city:['080200','080300']},
					{province:'090000',city:['090200']},
					{province:'110000',city:['110200']},
					{province:'120000',city:['120200','120300']},
					{province:'150000',city:['150200']},
					{province:'170000',city:['170200']},
					{province:'180000',city:['180200']},
					{province:'190000',city:['190200']},
					{province:'200000',city:['200200']},
					{province:'220000',city:['220200']},
					{province:'230000',city:['230200','230300']},
					{province:'240000',city:['240200']},
					{province:'250000',city:['250200']}
			];
		}
		param.selectedTitle = param.cfg.langs.didian;
		
		param.initTblFunc = this.initJobareaLayer;
		
		param.getSubValues = this.getJobareaIds;
		param.getSubColNum = function( len ) { return Math.ceil( Math.sqrt( len ) ); };		
		var tdWidth = 'e' == param.cfg.lang ? 'auto' : '75px';
		tdPaddingLeft = 'e' == param.cfg.lang ? '3px' : '1px';
		param.tdProps = { style : { width: tdWidth , paddingLeft: tdPaddingLeft  } };
		if ( param.cityChoose ) {
			param.tdProps.style.width = '84px';
			param.subTdProps = { style : {} };
			param.subTdProps.style.width = '75px';
			
		}

		param.emptyWords = param.cfg.langs.xzdq;

		JobLayer.apply( this , [param] );

	}.$extends( JobLayer );

	//share property & method
	var pt = JobareaLayer.prototype;

	//主要城市数据字典
	pt.mainCity = [
		{Chinese:'A',English:'A',subIds:['230400']},
		{Chinese:'L',English:'L',subIds:['270200','160300','120800','170300','071200','140400']},
		{Chinese:'B',English:'B',subIds:['010000','280400','160400']},
		{Chinese:'M',English:'M',subIds:['090300']},
		{Chinese:'C',English:'C',subIds:['240200','190200','090200','060000','070500','190700','070700']},
		{Chinese:'N',English:'N',subIds:['070200','080300','130200','070900','140200']},
		{Chinese:'D',English:'D',subIds:['230300','030800','230800','220500']},
		{Chinese:'Q',English:'Q',subIds:['120300','110400','160600','031900']},
		{Chinese:'E',English:'E',subIds:['280800']}, 
		{Chinese:'S',English:'S',subIds:['020000','040000','230200','160200','070300','100300','080500','030400','032500']},
		{Chinese:'F',English:'F',subIds:['110200','030600','230600']},
		{Chinese:' ',English:' ',subIds:['030400','032500']},		
		{Chinese:'G',English:'G',subIds:['030200','260200','130800']},
		{Chinese:'T',English:'T',subIds:['050000','210200','080800','160500','071800','231200']},		
		{Chinese:'H',English:'H',subIds:['220200','080200','150200','100200','280200','030300','190500','071900','080900','160700']},
		{Chinese:'W',English:'W',subIds:['180200','070400','080400','310200','150300','120500','120600']},		
		{Chinese:' ',English:' ',subIds:['071900','080900','160700']},
		{Chinese:'X',English:'X',subIds:['200200','110300','071100','180500','190400','200300']},		
		{Chinese:'J',English:'J',subIds:['120200','080700','080600','240300','031500','180700','120900','130300']},
		{Chinese:'Y',English:'Y',subIds:['120400','070800','180300','071300','081400','230500','290200']},
		{Chinese:' ',English:' ',subIds:['130300']},
		{Chinese:'Z',English:'Z',subIds:['110500','170200','030700','030500','071000','190300','031700']},
		{Chinese:'K',English:'K',subIds:['250200','070600']},
		{Chinese:' ',English:' ',subIds:['031800','071400','120700']}
	];

	pt.maxCityNumber=7;
	//每行显示类的数目（城市按字母分类）
	pt.column=2;

	//所有省份数据字典
	pt.allProvince=[
		{Chinese:'A-G',English:'A-G',subIds:['150000','340000','110000','270000','030000','140000','260000','360000']},
		{Chinese:'H-J',English:'H-J',subIds:['100000','160000','170000','220000','180000','190000','240000','070000','130000']},
		{Chinese:'L-S',English:'L-S',subIds:['230000','280000','290000','320000','120000','210000','200000','090000']},
		{Chinese:'T-Z',English:'T-Z',subIds:['350000','300000','330000','310000','250000','080000']}
	];
	//特殊频道
	pt.specialChannel=[
		{Code:'01',Chinese:'珠三角',English:'Zhujiang Delta',subIds:['030300','030400','030500','030600','030700','031500','031700','031800','031900','032500']}
	];

	pt.getJobareaIds = function( _value , isClearShenZhen ){//处理广东省深圳市特殊情况	
		var _values = this.constructor.prototype.getSubValues.apply( this , [_value] );		
		if ( '030000' == _value ) {
			/*if ( _values[1] != '040000' ) {
				 _values.splice( 1 , 0 , '040000' );
			}*/
			if ( isClearShenZhen ) {
				_values.splice( 1 , 1 );
			}
		}
		return _values;
	}

	pt.initJobareaLayer = function() {

		//table
		this.createTbl();
	
		if ( !this.cityChoose ) {
			//title tr
			this.createTitleTr();

			//selected tr
			if ( this.isMulty ) {
				this.createSelectedTr();
			
				//seprator line
				var tr = this.tbl.insertRow( -1  );
				var td = document.createElement( 'td' );
				td.colSpan =  this.colNum;
				td.className = 'jlSeprator';
				tr.appendChild( td );
			}

			//main city title
			var tr = this.tbl.insertRow( -1  );
			var td = document.createElement( 'td' );
			td.colSpan =  this.colNum;
			td.innerHTML = this.cfg.langs.zycs + '：';
			td.className = 'bigOrange gray';
			tr.appendChild( td );
		}
		
		var pareClsAdd = this.cityChoose && 'e' == this.cfg.lang ? ' quName' : '';
		//main city trs		
		var cityTr=this.tbl.insertRow(-1);
		var cityTd=document.createElement("td");	
		cityTd.colSpan=this.colNum;
		cityTr.appendChild(cityTd);	
		// 整个主要城市  都包含在 cityTable中
		var cityTable=document.createElement("table");		
	
		cityTable.style.width=pt.maxCityNumber*pt.column*50+"px";	
		
		cityTd.appendChild(cityTable);
		for(var i=0;i<this.mainCity.length;i++){	
			
			// 一行排this.column列
			if((i % pt.column) ==0){				
			  var tmptr =cityTable.insertRow(-1);								
			}				
			this.mainCity[i]['pareName'] = this.mainCity[i][this.cfg.fullLang];
			this.mainCity[i]['pareClassName'] = 'cityOrange' + pareClsAdd;	

			this.createCitySelectTd(this.mainCity[i],tmptr,pt.maxCityNumber);		
					
		}
		//all province title
		var tr = this.tbl.insertRow( -1  );
		var td = document.createElement( 'td' );
		
		td.colSpan =  this.colNum;
		td.innerHTML = this.cfg.langs.sysf + '：';
		td.className = 'bigOrange gray';
		tr.appendChild( td );		

		//all province trs		
		for ( var i = 0 ; i < this.allProvince.length ; i++ ) {
			this.allProvince[i]['pareName'] = this.allProvince[i][this.cfg.fullLang] + '';
			this.allProvince[i]['pareClassName'] = 'cityOrange' + pareClsAdd;
			this.createSelectAreaTr( this.allProvince[i] );
		}

		//special Chinnel
		if(!this.noShowSpArea)
		{
			var tr = this.tbl.insertRow( -1  );
			var td = document.createElement( 'td' );
			td.colSpan =  this.colNum;
			td.innerHTML = this.cfg.langs.tspd + '：';
			td.className = 'bigOrange gray';
			tr.appendChild( td );

			//special Chinnel trs
			for ( var i = 0 ; i < this.specialChannel.length ; i++ ) 
			{
				this.specialChannel[i]['pareName'] = this.specialChannel[i][this.cfg.fullLang] + '';
				this.specialChannel[i]['pareClassName'] = 'cityOrange' + pareClsAdd;
				this.specialChannel[i]['spCode'] = this.specialChannel[i]['Code'];
				this.createSelectAreaTr( this.specialChannel[i] );
			}
		}
			
		if ( !this.cityChoose ) {
			//bottom line
			this.createBottomLine();
		}	
	}
	pt.createAreaTd = function( _value , isLast , checked ) {
		//新添加的城市特别显示 
		var newCity=['130300','130800','200300','160700','230400','230500','230600','230800','231200','220500','140400','290200','280800'];
		var hotCity=['010000','020000','030200','040000'];
		var isNewCity=false;
		var isHotCity=false;
		for(var i=0;i<newCity.length;i++){
			if(_value==newCity[i]){
				isNewCity=true;
				break;
			}
		}
		for(var i=0;i<hotCity.length;i++){
			if(_value==hotCity[i]){
				isHotCity=true;
				break;
			}
		}
		var td = document.createElement( 'td' );
		td.style.cursor = 'pointer';	
		if(isNewCity){
			td.style.color='#0075E8';
		}
		if(isHotCity){
			td.style.fontWeight='bold';
		}
		for(var i = 0; i < this.specialChannel.length; i++)
		{
			if(_value == this.specialChannel[i]['Code'])
			{
				td.style.fontWeight='bold';
				td.style.textAlign='right';
			}
		}
		td.thisObj = this;
		td._value = _value;
		td.isLast = isLast != undefined ? isLast : false;
        var bAddCheckBox = false;
		if ( this.isMulty && ( td.isLast || !this.getSubValues( _value ).length ) ) {
            var bAddCheckBox = true;
			td.innerHTML = '<input style="display:none" type="checkbox" name="' + this.namePrefix + _value + '" onclick="this.checked=!this.checked;" ' + ( checked ? 'checked="checked"' : '' ) + ' />';
		}
		td.onclick = this.tdClk;
		if ( this.cityChoose ) {
			var a = document.createElement( 'a' );
			a.className = 'blue';
            var sTextValue = this.getTextFunc( _value );
		
			a.innerHTML = sTextValue;

			if ( this.getSubValues( _value ).length && !td.isLast ) {
				a.href = 'javascript: void(0);';
				a.onclick = 'return false;';
			}
			else {
				this.cityChoose.jobarea = _value;
				a.href = this.getSearchResultHref( this.cityChoose );
			}

			td.appendChild( a );
            if (('c' == this.cfg.lang) && ('undefined' != typeof this.tdProps.style.width)) {
                var iTextValueLength = sTextValue.getLen();
                if (iTextValueLength > 8 && iTextValueLength < 12) {
                    if (bAddCheckBox) {
                        if (parseInt(this.subTdProps.style.width) < 85) {
                            this.subTdProps.style.defaultWidth = this.subTdProps.style.width;
                            this.subTdProps.style.width        = '85px';
                        }
                    }
                }
                else if (iTextValueLength > 12) {
                    if (bAddCheckBox) {
                        if (parseInt(this.subTdProps.style.width) < 120) {
                            this.subTdProps.style.defaultWidth = this.subTdProps.style.width;
                            this.subTdProps.style.width        = '120px';
                        }
                    }
                    else {
                        if (parseInt(this.tdProps.style.width) < 105) {
                            this.subTdProps.style.defaultWidth = this.subTdProps.style.width;
                            this.subTdProps.style.width        = '105px';
                        }
                    }
                }
                else {
                    if ('undefined' != typeof this.subTdProps.style.defaultWidth) {
                        this.subTdProps.style.width = this.subTdProps.style.defaultWidth;
                        delete this.subTdProps.style.defaultWidth;
                    }
                }
            }
		}
		else {
            var sTextValue = this.getTextFunc( _value );				
            if (('c' == this.cfg.lang) && ('undefined' != typeof this.tdProps.style.width)) {
                var iTextValueLength = sTextValue.getLen();
				if(iTextValueLength == 6 )
				{
					if(sTextValue == '珠三角')
					{
							this.tdProps.style.defaultWidth = this.tdProps.style.width;
							this.tdProps.style.width        = '77px';
					}
				}
                else if (iTextValueLength > 6 && iTextValueLength < 12) {
                    if(sTextValue == '黑龙江省')
					{
							this.tdProps.style.defaultWidth = this.tdProps.style.width;
							this.tdProps.style.width        = '75px';
					}
					else
					{
						if (parseInt(this.tdProps.style.width) < 105) {
							this.tdProps.style.defaultWidth = this.tdProps.style.width;
							this.tdProps.style.width        = '105px';
						}
					}
                }
                else if (iTextValueLength > 12) {
                    if (bAddCheckBox) {
                        if (parseInt(this.tdProps.style.width) < 120) {
                            this.tdProps.style.defaultWidth = this.tdProps.style.width;
                            this.tdProps.style.width        = '120px';
                        }
                    }
                    else {
                        if (parseInt(this.tdProps.style.width) < 105) {
                            this.tdProps.style.defaultWidth = this.tdProps.style.width;
                            this.tdProps.style.width        = '105px';
                        }
                    }
                }
                else {
                    if ('undefined' != typeof this.tdProps.style.defaultWidth) {
                        this.tdProps.style.width = this.tdProps.style.defaultWidth;
                        delete this.tdProps.style.defaultWidth;
                    }
                }
            }
            td.appendChild(document.createTextNode(sTextValue));
		}
		this.setProps( td , this.tdProps );
		return td;
	}

	pt.createSpSubAreaTd = function( data )
	{
		var td = document.createElement( 'td' );
		if( typeof data == 'object' && data.length > 0 )
		{
			var areaStr = '(';
			for(var k1 = 0; k1 < data.length; k1++)
			{
				areaStr+=this.getTextFunc( data[k1] )+" ";
			}
			areaStr = areaStr.substr(0,areaStr.length-1); 
			areaStr+=")";
			td.innerHTML = areaStr;
			td.colSpan = this.colNum - 1;
		}
		return td;
	}
	pt.createCitySelectTd=function(data,tr,maxCityNumber){
		if(data){
			if ( data['subIds'] != undefined ) {			
			 var td = document.createElement( 'td' );			 
			 td.innerHTML=data['pareName'];
			 if ( data['pareClassName'] ) {
					td.className = data['pareClassName'];
			 }
			 tr.appendChild(td);
			 var _values = data['subIds'];
			}			
		   for ( var k = 0 ; k <maxCityNumber ; k++ ) {	
				if(k<_values.length){
					tr.appendChild( this.createAreaTd( _values[k] ) );
				}else{
					var tmptd=document.createElement("td");									
					tr.appendChild(tmptd);
				}
			}		
						
		}	
	}

	pt.createSelectAreaTr = function( data ) {
		if ( data ) {
			var tr = this.tbl.insertRow( -1  );
			if( data['spCode'] != undefined )
			{
				tr.appendChild( this.createAreaTd( data['spCode'] ) );
				if ( data['subIds'] != undefined ) 
				{
					tr.appendChild( this.createSpSubAreaTd(data['subIds']) );
				}
			}else
			{
				if ( data['trClassName'] ) {
				tr.className = data['trClassName'];
				}
				if ( data['subIds'] != undefined ) {
					var td = document.createElement( 'td' );
					td.rowSpan = Math.ceil( data['subIds'].length / ( this.colNum - 1 ) );
					td.innerHTML = data['pareName'];
					if ( data['pareClassName'] ) {
						td.className = data['pareClassName'];
					}
					tr.appendChild( td );
					var _values = data['subIds'];
					var hasLeftPare = true;
				}
				else {
					var _values = data;
					var hasLeftPare = false;
				} 
				
				for ( var k = 0 ; k < _values.length ; k++ ) {
					if ( ( !hasLeftPare && 0 == k % this.colNum ) || ( hasLeftPare && k != 0 && 0 == k % ( this.colNum - 1 ) ) ) {
						tr = this.tbl.insertRow( -1  );
						if ( data['trClassName'] ) {
							tr.className = data['trClassName'];
						}
					}
					tr.appendChild( this.createAreaTd( _values[k] ) );
				}
				var colNum = hasLeftPare ? this.colNum - 1 : this.colNum;
				var modNum = k % colNum;
				if ( modNum > 0 ) {
					var td = document.createElement( 'td' );
					td.colSpan = colNum - modNum;
					tr.appendChild( td );
				}
			}
			
		}
	}
	//override the method
	pt.getTextFunc = function( _value ) {
	var _text = '';
	if(_value.length == 2)
	{

		for(var k = 0; k < this.specialChannel.length; k++)
		{
			if(this.specialChannel[k]['Code'] == _value)
			{
				_text = this.specialChannel[k][this.cfg.fullLang];
			}
		}
	}
	if ( this.data && this.data[_value] ) {
		if(_value=='030000')  {
			if(this.cfg.lang=='c'){
				_text = this.data[_value]+"(除深圳)";
			}else{
				_text = this.data[_value];
			}
		}
		else
			_text = this.data[_value];
	}
	return _text;
	}

})();
