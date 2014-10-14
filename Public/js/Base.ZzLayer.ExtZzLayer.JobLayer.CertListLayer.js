(function() {
	if ( window.CertListLayer ) {
		alert( 'variable CertListLayer has been used,it will be replaced with _JobareaLayer!' );
		window._CertListLayer = window.CertListLayer;
	}
	window.CertListLayer = function( param ) {
		param.createSubLayer = this.createSubLayer;
		param.getSubValues = this.getSubValues;
		param.getSubCodes = this.getSubCodes;
		JobLayer.apply( this , [param] );
	}.$extends( JobLayer );
	var pt = CertListLayer.prototype;
	
	pt.getSubValues = function( _value ) {
		return this.getSubCodes( this.data , _value );
	}
	pt.getSubCodes = function( data , _code ) {
		if ( data.subCodesCache == undefined ) {
			data.subCodesCache = [];
			for ( var code in data ) {
				if( _code.length == 6 )
				{
					if(/^[\d]{2}(([\d][1-9])|([1-9][\d]))[\d]{2}$/.test(code))
					{
						var str56 = code.substr(4,2);
						if(str56 == '00')
						{
							var pareCode = code.substr( 0 , 2 ) + '0000';
							
						}else
						{
							var pareCode = code.substr( 0 , 4 ) + '00';
						}
						if ( data.subCodesCache[pareCode] == undefined )
						{
							data.subCodesCache[pareCode] = [];
						}
						data.subCodesCache[pareCode].push( code );
					}
				}else if(_code.length == 2)
				{
					data.subCodesCache[_code] = [];
					break;
				}
				else
				{
					if ( code.substr(2,2) != '00' ) 
					{
						var pareCode = code.substr( 0 , 2 ) + '00';
						if ( data.subCodesCache[pareCode] == undefined ) 
						{
							data.subCodesCache[pareCode] = [];
						}
						data.subCodesCache[pareCode].push( code );
					}
				}
			}
		}
		return data.subCodesCache[_code] || [];
	}	
	pt.createSubLayer = function( td ) {
		var subValues;
		if ( td._value && ( subValues = this.getSubValues( td._value ) ).length ) {
			var param = {
				openType : 1 ,
				createIfr : false ,
				appendNode1 : td,
				MOutCloseNode : td
			};
			var subLayer = new ExtZzLayer( param );
			var tbl = document.createElement( 'table' );
			tbl.border = 0;
			tbl.cellPadding = 0;
			tbl.cellSpacing = 0;
			var subColNum = this.getSubColNum( subValues.length );
			if ( this.containPare ) {
				var tr = tbl.insertRow( -1  );
				var newTd = this.createTd( td._value , true , this.getChecked( td._value ) );
				newTd.colSpan = subColNum;
				tr.appendChild( newTd );
				newTd.style.fontWeight = 'bold';
				newTd.style.cursor = 'default';
				newTd.subLayer = subLayer;
				newTd.onclick = function(){};
				this.subTdProps_nohigh = {
					onmouseover : function() { this.className = 'zz_51LowerYellow'; } ,
					onmouseout : function() { this.className = 'zz_51LowerYellow'; }
				}
				this.setProps( newTd , this.subTdProps_nohigh );
			}
			var tr;
			for ( var i = 0 ; i < subValues.length ; i++ ) {
				var isLastTmp = true;
				if ( 0 == i % subColNum ) {
					tr = tbl.insertRow( -1 );
				}
				if(this.showPvnCityDistrict)
				{
					if(this.showDistrictData)
					{
						for(var ik = 0; ik < this.showDistrictData.length; ik++)
						{
							if(this.showDistrictData[ik].province == td._value)
							{
								for( var ik1 = 0; ik1 < this.showDistrictData[ik].city.length; ik1++ )
								{
									if(this.showDistrictData[ik].city[ik1] == subValues[i])
									{
										isLastTmp = false;
										break;
									}
								}
								if(!isLastTmp)
								{
									break;
								}
							}
						}
					}
				}

				newTd = this.createTd( subValues[i] , isLastTmp , this.getChecked( subValues[i] ) );
				tr.appendChild( newTd );
				if(isLastTmp)
				{
					newTd.subLayer = subLayer;
					
				}
				this.setProps( newTd , this.subTdProps );

			}
			var modNum = i % subColNum;
			if ( modNum > 0 ) {
				var newTd = document.createElement( 'td' );
				newTd.colSpan = subColNum - modNum;
				tr.appendChild( newTd );
			}
			this.setProps( tbl , this.subTblProps );

			subLayer.setContent( tbl );
			
			td.subLayer = subLayer;
		}
	}
})();
