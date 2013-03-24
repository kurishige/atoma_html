/**
 * 共通処理
 *
 * 説明
 * 
 * @author  Shigeaki Kurimoto <kurimoto@prgear.jp>
 * @create  2013/02/15
 * @version 1.00
 */

/* -------------------------------------------------------------------- */

/**
 * グローバル変数
*/
var _current = 0;
var _logoX   = [298,43,43,43];
var _logoW   = [235,190,190,190];
var _menu_id = ['#idHeaderMenuHome',
                '#idHeaderMenuCompany',
                '#idHeaderMenuConcept',
                '#idHeaderMenuContact'];
var _menu_top_on    = [37,77,117,159];
var _menu_left_on   = [768,768,768,768];
var _menu_left_off  = [747,747,747,747];
var _menu_width	    = [57,85,85,85];
var _menu2_top_on   = [55,55,55,55];
var _menu2_left_on  = [390,455,545,630];
var _menu2_top_off  = [37,77,117,159];
var _menu2_left_off = [747,747,747,747];
var _anisw = 0;



/* -------------------------------------------------------------------- */
  
(function($) {

	$(function(){  

		/* -------------------------------------------------------------------- */

		/**
		 * メニュークリック
		*/
		$('div.clsHeaderMenuMove').click(function(e) {
		    var thisNum = $('div.clsHeaderMenuMove').index(this);
		    if(thisNum != _current ) {
		        pageMove(thisNum);
		    }
		});

		$('div.clsHeaderMenuMove2').click(function(e) {
		    var thisNum = $('div.clsHeaderMenuMove2').index(this);
		    if(thisNum != _current ) {
		        pageMove(thisNum);
		    }
		});

		$(window).scroll(function () {
			var y = jQuery(this).scrollTop();
			$("#idCompanyRightBar").css("top", y);
			$("#idConceptRightBar").css("top", y);
			$("#idContactRightBar").css("top", y);
		});
		
		/* -------------------------------------------------------------------- */

		/**
		 * 移動処理
		*/
		function pageMove(next) {
			
			header_menu_name = ["#idHeaderMenuHome2","#idHeaderMenuCompany2","#idHeaderMenuConcept2","#idHeaderMenuContact2"];

			if ( next == 0 ) {
		    	$(header_menu_name[_current]).removeClass('clsHeaderMenu2On'+_current);

		    	$("#idHeaderLine").css({
					"width"		  : 700,
					"left"        : 0
				}).animate({ 
					width   : 0,		 
					left 	: 350
				}, 100 );

		    	logoMove(next);

			} else if ( _current == 0 ) {
		    	$(header_menu_name[next]).addClass('clsHeaderMenu2On'+next);
		    	$(header_menu_name[_current]).removeClass('clsHeaderMenu2On'+_current);
		    	
		    	logoMove(next);

			} else {
		    	$(header_menu_name[next]).addClass('clsHeaderMenu2On'+next);
		    	$(header_menu_name[_current]).removeClass('clsHeaderMenu2On'+_current);

				menuCall(next,_current);
				_current = next;
			}
			
		}

		/* -------------------------------------------------------------------- */

		/**
		 * ロゴ移動処理
		*/
		function logoMove(next) {

			if ( next == 0 ) {
				menuCall(next,_current);
			}
			
	    	$("#idHeaderLogo").css({
				"top"    : _logoX[_current],
				"width"  : _logoW[_current]
			}).animate({
				top    : _logoX[next],
				width  : _logoW[next]
			},800 , function(){
				if ( _current == 0 ) {
					$("#idHeaderLine").css({
						"width"	: 0,
						"left" 	: 350
					}).animate({
						width	: 700,
						left	: 0
					},600 ,function(){
						menuCall(next,_current);
						_current = next;
					});
				} else {
					_current = next;
				}
    		});
		}

		/* -------------------------------------------------------------------- */

		/**
		 * メニューホーム移動処理
		*/
		function menuCall(nnum,cnum) {

			if ( cnum == 0 ) {
				menuOtherMove();
				topPage(false,nnum,cnum)
			} else if ( cnum == 1) {
				companyPage(false,nnum,cnum)
			} else if ( cnum == 2) {
				conceptPage(false,nnum,cnum);
			} else if ( cnum == 3) {
				contactPage(false,nnum,cnum);
			}			

			if ( nnum == 0 ) {
				menuHomeMove();
				topPage(true,nnum,cnum)
			} else if ( nnum == 1) {
				companyPage(true,nnum,cnum)
			} else if ( nnum == 2) {
				conceptPage(true,nnum,cnum);
			} else if ( nnum == 3) {
				contactPage(true,nnum,cnum);
			}
			
		}

		/* -------------------------------------------------------------------- */

		/**
		 * メニューホーム移動処理
		*/
		function menuHomeMove() {

			/* メニューボタン */
			for ( i=0; i<4; i++) {
				$(_menu_id[i]+'2').css({
					"top"	: _menu2_top_on[i],
					"left"	: _menu2_left_on[i]
				}).animate({
					top		: _menu2_top_off[i],
					left	: _menu2_left_off[i]
				}, 900 , function(){

					if ( _anisw == 1 ) {
						for ( i=0; i<4; i++) {
							$(_menu_id[i]).css({
								"top"  		 : _menu_top_on[i],
								"left"		 : 747,
								"width"		 : 0
							}).animate({
								top   : _menu_top_on[i],
						   		left  : _menu_left_on[i],
						   		width : _menu_width[i]
						   	}, 90 );
						}
						_anisw = 0;
					}
				});
			}
		}
		
		/* -------------------------------------------------------------------- */

		/**
		 * メニューホーム以外移動処理
		*/
		function menuOtherMove() {

			/* メニューボタン */
			for ( i=0; i<4; i++) {
				$(_menu_id[i]).css({
					"left"	: _menu_left_on[i],
			   		"width" : _menu_width[i]
				}).animate({
					left	: _menu_left_off[i],
					width	: 0
				}, 90 , function(){
					if ( _anisw == 0 ) {
						for ( i=0; i<4; i++) {
							$(_menu_id[i]+"2").css({
								"top"  		 : _menu2_top_off[i],
								"left"		 : _menu2_left_off[i]
							}).animate({
								top   : _menu2_top_on[i],
						   		left  : _menu2_left_on[i]
						   	}, 900 );
						}
						_anisw = 1;
					}
				});
			}
		}

		/* -------------------------------------------------------------------- */

		/**
		 * トップページ処理
		*/
		function topPage(sw,nnum,cnum) {

			if ( sw ) {
				top_side_bar			 = [10,0,277];
				top_line_left			 = [400,-718,400,0];
				top_line_right			 = [450,1024,450,228];
				top_line_message		 = [0,51];
				$("#idAtomaAll").css({
					"minHeight"	: 701
				});
			} else {
				top_side_bar			 = [10,277,0];
				top_line_left			 = [400,0,-100,-718];
				top_line_right			 = [450,228,-100,1024];
				top_line_message		 = [51,0];
			}

			/* 右サイドバー */
			$("#idTopRightBar").css({
				"zIndex" : top_side_bar[0],
				"width"  : top_side_bar[1]
			}).animate({
				width : top_side_bar[2]
			},900 );
			
			/* 左ライン */
			$("#idTopLineLeft").css({
				"top"  : top_line_left[0],
				"left" : top_line_left[1]
			}).animate({
    			top  : top_line_left[2],
    			left : top_line_left[3]
    		},900);
		
			/* 右ライン */
			$("#idTopLineRight").css({
				"top"  	: top_line_right[0],
				"left"  : top_line_right[1]
			}).animate({
    			top  : top_line_right[2],
    			left : top_line_right[3]
    		},900 );
			
			/* メッセージ */
			$("#idTopMessage").css({
				"height"	: top_line_message[0]
			}).animate({
    			height  	: top_line_message[1]
    		},1100 );
			
			if ( sw ) {
				$("#idTopBirth").fadeIn(1500);
			} else {
				$("#idTopBirth").fadeOut(1500);
			}

		}

		/* -------------------------------------------------------------------- */

		/**
		 * 会社概要処理
		*/
		function companyPage(sw,nnum,cnum) {

			if ( sw ) {
				company_side_bar     = [10,0,1301,0,747];
				company_title	     = [0,233,700];
				company_title_mes    = [0,600,200];
				company_policy	     = [0,645,700];
				company_policy_mes   = [0,600,400];
				company_profile	     = [0,645,700];
				company_profile_mes  = [0,640,1400];
				$("#idAtomaAll").css({
					"minHeight"	: 1200
				});
			} else {
				company_side_bar   = [9,0,747,0,747];
				company_title      = [233,0,400];
				company_title_mes  = [600,0,60];
				company_policy	   = [645,0,400];
				company_policy_mes = [600,0,60];
				company_profile	   = [645,0,400];
				company_profile_mes = [640,0,700];
			}
			
			/* 右サイドバー */
			$("#idCompanyRightBar").css({
				"zIndex"	: company_side_bar[0],
				"top"		: company_side_bar[1],
				"left"		: company_side_bar[2]
			}).animate({
				top			: company_side_bar[3],
				left		: company_side_bar[4]
			},900 );			

			/* タイトル */
			$("#idCompanyTitle").css({
				"width"	: company_title[0]
			}).animate({
    			width  : company_title[1]
    		},company_title[2] ,function(){
    			if ( sw ) {
    				roopMessage("#idCompanyTitleMessage",1,company_title_mes[0],company_title_mes[1],company_title_mes[2],9);
    			}
    		});
			if ( !sw ) {
				roopMessage("#idCompanyTitleMessage",1,company_title_mes[0],company_title_mes[1],company_title_mes[2],9);
			}

			/* 方針 */
			$("#idCompanyPolicy").css({
				"width"	: company_policy[0]
			}).animate({
    			width  : company_policy[1]
    		},company_policy[2] ,function(){
    			if ( sw ) {
    				roopMessage("#idCompanyPolicy",1,company_policy_mes[0],company_policy_mes[1],company_policy_mes[2],4);
    			}
    		});
			if ( !sw ) {
				roopMessage("#idCompanyPolicy",1,company_policy_mes[0],company_policy_mes[1],company_policy_mes[2],4);
			}

			/* プロフィール */
			$("#idCompanyProfile").css({
				"width"	: company_profile[0]
			}).animate({
    			width  : company_profile[1]
    		},company_profile[2] ,function(){
    			if ( sw ) {
    				roopMessage("#idCompanyProfileArea",1,company_profile_mes[0],company_profile_mes[1],company_profile_mes[2],1);
    			}
    		});
			if ( !sw ) {
				roopMessage("#idCompanyProfileArea",1,company_profile_mes[0],company_profile_mes[1],company_profile_mes[2],1);
			}
		}

		/* -------------------------------------------------------------------- */

		/**
		 * メッセージループ処理
		*/
		function roopMessage(idname,num,value1,value2,speed,lastnum) {

			if ( num <= lastnum ){
				$(idname+num).css({
					"width"	    : value1
				}).animate({
	    			width  : value2
	    		},speed ,function(){
	    			roopMessage(idname,num+1,value1,value2,speed,lastnum);
	    		});
			}
		}
		
		/* -------------------------------------------------------------------- */

		/**
		 * コンセプト処理
		*/
		function conceptPage(sw,nnum,cnum) {

			if ( sw ) {
				concept_side_bar     = [10,-701,747,0,747];
				concept_title	     = [120,0,145,24,700];
				vision_title	     = [170,0,210,30,700];
				vision_area	         = [240,0,250,350,700];
				business_title	     = [605,0,645,30,700];
				business_area	     = [675,0,685,450,700];
				brand_title	         = [1160,0,1200,35,700];
				brand_area	         = [1230,0,1240,750,700];
				$("#idAtomaAll").css({
					"minHeight"	: 2000
				});
			} else {
				concept_side_bar   = [9,0,747,0,747];
				concept_title	   = [145,24,120,0,400];
				vision_title	   = [210,30,170,0,400];
				vision_area	       = [250,350,240,0,400];
				business_title	   = [645,30,605,0,400];
				business_area	   = [685,450,675,0,400];
				brand_title	       = [1200,35,1160,0,400];
				brand_area	       = [1240,750,1230,0,400];
			}
			
			/* 右サイドバー */
			$("#idConceptRightBar").css({
				"zIndex"	: concept_side_bar[0],
				"top"		: concept_side_bar[1],
				"left"		: concept_side_bar[2]
			}).animate({
				top			: concept_side_bar[3],
				left		: concept_side_bar[4]
			},900 );			

			/* タイトル */
			if ( sw ) {
				$("#idConceptTitle").css({
					"top"	 : concept_title[0],
   					"height" : concept_title[1]
				}).animate({
					top  	: concept_title[2],
	    			height  : concept_title[3]
	    		},concept_title[4] ,function(){
	    			$("#idConceptVision").css({
	    				"top"		: vision_title[0],
	    				"height"	: vision_title[1]
	    			}).animate({
	    				top			: vision_title[2],
	    				height		: vision_title[3]
	    			},vision_title[4], function(){
		    			$("#idConceptVisionArea").css({
		    				"top"		: vision_area[0],
		    				"height"	: vision_area[1]
		    			}).animate({
		    				top			: vision_area[2],
		    				height		: vision_area[3]
		    			},vision_area[4] );
	    			});
		    			
	    			$("#idConceptBusiness").css({
	    				"top"		: business_title[0],
	    				"height"	: business_title[1]
	    			}).animate({
	    				top			: business_title[2],
	    				height		: business_title[3]
	    			},business_title[4], function(){
		    			$("#idConceptBusinessArea").css({
		    				"top"		: business_area[0],
		    				"height"	: business_area[1]
		    			}).animate({
		    				top			: business_area[2],
		    				height		: business_area[3]
		    			},business_area[4] );
	    			});
		    			
	    			$("#idConceptBrand").css({
	    				"top"		: brand_title[0],
	    				"height"	: brand_title[1]
	    			}).animate({
	    				top			: brand_title[2],
	    				height		: brand_title[3]
	    			},brand_title[4], function(){
		    			$("#idConceptBrandArea").css({
		    				"top"		: brand_area[0],
		    				"height"	: brand_area[1]
		    			}).animate({
		    				top			: brand_area[2],
		    				height		: brand_area[3]
		    			},brand_area[4] );
	    			});		    			
	    		});
			} else {
    			$("#idConceptVisionArea").css({
    				"top"		: vision_area[0],
    				"height"	: vision_area[1]
    			}).animate({
    				top			: vision_area[2],
    				height		: vision_area[3]
    			},vision_area[4] ,function(){
	    			$("#idConceptVision").css({
	    				"top"		: vision_title[0],
	    				"height"	: vision_title[1]
	    			}).animate({
	    				top			: vision_title[2],
	    				height		: vision_title[3]
	    			},vision_title[4] ,function(){
	    				$("#idConceptTitle").css({
	    					"top"	 : concept_title[0],
	       					"height" : concept_title[1]
	    				}).animate({
	    					top  	: concept_title[2],
	    	    			height  : concept_title[3]
	    	    		},concept_title[4] );
	    			});

	    			$("#idConceptBusiness").css({
	    				"top"		: business_title[0],
	    				"height"	: business_title[1]
	    			}).animate({
	    				top			: business_title[2],
	    				height		: business_title[3]
	    			},business_title[4], function(){
		    			$("#idConceptBusinessArea").css({
		    				"top"		: business_area[0],
		    				"height"	: business_area[1]
		    			}).animate({
		    				top			: business_area[2],
		    				height		: business_area[3]
		    			},business_area[4] );
	    			});
		    			
	    			$("#idConceptBrand").css({
	    				"top"		: brand_title[0],
	    				"height"	: brand_title[1]
	    			}).animate({
	    				top			: brand_title[2],
	    				height		: brand_title[3]
	    			},brand_title[4], function(){
		    			$("#idConceptBrandArea").css({
		    				"top"		: brand_area[0],
		    				"height"	: brand_area[1]
		    			}).animate({
		    				top			: brand_area[2],
		    				height		: brand_area[3]
		    			},brand_area[4] );
	    			});
		    			
    			});
			}
		}

		
		/* -------------------------------------------------------------------- */

		/**
		 * コンタクト処理
		*/
		function contactPage(sw,nnum,cnum) {

			if ( sw ) {
				contact_speed     = [2000,2000];
				$("#idAtomaAll").css({
					"minHeight"	: 701
				});
			} else {
				contact_speed     = [1000,1000];
			}
			
			if ( sw ) {
				$("#idContactRightBar").fadeIn(contact_speed[0]);
				$("#idContactArticle").fadeIn(contact_speed[1]);
			} else {
				$("#idContactRightBar").fadeOut(contact_speed[0]);
				$("#idContactArticle").fadeOut(contact_speed[1]);
			}

		}
	});

})(jQuery);  
