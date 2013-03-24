/**
 * 初期処理
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

/* -------------------------------------------------------------------- */
  
(function($) {

	$(function(){  

		xmlLoad();

		init();
		
		/* -------------------------------------------------------------------- */
	
		/**
		 * 初期処理
		*/
		function init(){

			$("#idHeaderLogo").css({
				"top" : -66
			}).animate({
	    		top : 298
	    	},1000 );
			
			$("#idTopLineLeft").css({
				"top"  : 400,
				"left" : -743
			}).animate({
    			top  : 400,
    			left : 0
    		},1100);
		
			$("#idTopLineRight").css({
				"top"  	: 450,
				"left"  : 1024
			}).animate({
    			top  : 450,
    			left : 228
    		},1100 );
			
			$("#idTopBirth").fadeIn(2500);
			
			fleXenv.fleXcrollMain("idTopTopics");
		}

		/* -------------------------------------------------------------------- */
		  
		/**
		 * XML読み込み
		*/
		function xmlLoad(){
			
		    $.ajax({  
		        url			: 'toppics.xml',  
		        type		: 'get',  
		        dataType	: 'xml',  
		        timeout		: 1000,  
		        success		: toppics_xml  
		    });

		}

		/* -------------------------------------------------------------------- */

		/**
		 * XMLデータを取得
		*/
		function toppics_xml(xml,status){  

			if( status != 'success' ) return;

			$(xml).find('item').each(function(){
			    var date   = $(this).find('date').text();  
			    var title  = $(this).find('title').text();  
			    var url    = $(this).find('url').text();
			    $("#idTopTopicsTable").append("<tr><td width='70px'>" + date + "</td><td>" + title + "</td>");
			});
		}

	});

})(jQuery);  
