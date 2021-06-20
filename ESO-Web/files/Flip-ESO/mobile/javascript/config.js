	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#007669";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#007669";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Hide";bookConfig.FlipSound="No";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="10";bookConfig.autoPlayLoopCount="-1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpeg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.02";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="double";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="Yes";bookConfig.securitySetting="<SecurityInfo><Security key=\"OHFKQU9SXkdoakM\" type=\"password\">Pipogonnie10</Security></SecurityInfo>";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#883397";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=285;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=767;;bookConfig.securityType="2";;bookConfig.singlePasswordMD5="719367892CB904C9BD04F82820966E0B";;bookConfig.singlePasswordKey="AF9D690E452B375A330963";;bookConfig.excludeFrontPages="0";bookConfig.CreatedTime ="210620042606";bookConfig.bookTitle="Event Security Officer";bookConfig.bookmarkCR="a7e16ab8554c491ae90090b421b6c2cb5d488c9d";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [{ language : "Dutch",btnFirstPage:"Begin",btnNextPage:"Volgende pagina",btnLastPage:"Einde",btnPrePage:"Vorige pagina",btnDownload:"Download",btnPrint:"Afdrukken",btnSearch:"Zoeken",btnClearSearch:"Wissen zoekterm",frmSearchPrompt:"Clear",btnBookMark:"Inhoudsopgave",btnHelp:"Help",btnHome:"Home",btnFullScreen:"Volledig scherm aan",btnDisableFullScreen:"Volledig scherm uit",btnSoundOn:"Geluid aan",btnSoundOff:"Geluid uit",btnShareEmail:"Delen",btnSocialShare:"Delen social media",btnZoomIn:"Inzoomen",btnZoomOut:"Uitzoomen",btnDragToMove:"Move by mouse drag",btnAutoFlip:"Auto Flip aan",btnStopAutoFlip:"Auto Flip uit",btnGoToHome:"Home",frmHelpCaption:"Help",frmHelpTip1:"Dubbelklikken voor in- of uitzoomen",frmHelpTip2:"Klik op de paginahoek om om te slaan",frmPrintCaption:"Druk venster af",frmPrintBtnCaption:"Druk knop af",frmPrintPrintAll:"Druk alle pagina's af",frmPrintPrintCurrentPage:"Druk huidige pagina af",frmPrintPrintRange:"Druk selectie af",frmPrintExampleCaption:"Bijvoorbeeld: 2,5,8-26",frmPrintPreparePage:"Pagina voorbereiden",frmPrintPrintFailed:"Afdrukfout",pnlSearchInputInvalid:"(minimaal 3 karakters)",loginCaption:"Login",loginInvalidPassword:"Geen geldig wachtwoord",loginPasswordLabel:"Wachtwoord:",loginBtnLogin:"Login",loginBtnCancel:"Annuleren",btnThumb:"Thumbnails",lblPages:"Pagina",lblPagesFound:"Doorzochte pagina's",lblPageIndex:"Doorzochte pagina's",btnAbout:"Over",frnAboutCaption:"Over & Contact",btnSinglePage:"Enkele pagina",btnDoublePage:"Dubbele pagina",btnSwicthLanguage:"Verander taal",tipChangeLanguage:"Kies onderstaand een taal ...",btnMoreOptionsLeft:"Meer opties",btnMoreOptionsRight:"Meer opties",btnFit:"Passend in venster",smallModeCaption:"Klik voor volledig scherm",btnAddAnnotation:"Voeg opmerking toe",btnAnnotation:"Opmerkingen",FlipPageEditor_SaveAndExit:"Opslaan en beëindigen",FlipPageEditor_Exit:"Beëindigen",DrawToolWindow_Redo:"Opnieuw",DrawToolWindow_Undo:"Annuleren",DrawToolWindow_Clear:"Wissen",DrawToolWindow_Brush:"Borstel",DrawToolWindow_Width:"Borstelbreedte",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Kleur",DrawToolWindow_Eraser:"Vlakgom",DrawToolWindow_Rectangular:"Rechthoekig",DrawToolWindow_Ellipse:"Ellips",TStuff_BorderWidth:"Randbreedte",TStuff_BorderAlph:"Rand Alfa",TStuff_BorderColor:"Randkleur",DrawToolWindow_TextNote:"Opmerking",AnnotMark:"Bladwijzer",lastpagebtnHelp:"Laatste pagina",firstpagebtnHelp:"Eerste pagina",homebtnHelp:"Terug naar Home pagina",aboubtnHelp:"Over",screenbtnHelp:"Open de applicatie in volledig scherm",helpbtnHelp:"Toon Helpvenster",searchbtnHelp:"Doorzoek pagina's",pagesbtnHelp:"Kijk eens naar de thumbnail van deze brochure",bookmarkbtnHelp:"Open bladwijzerpaneel",AnnotmarkbtnHelp:"Open inhoudsopgavepaneel",printbtnHelp:"Druk de brochure af",soundbtnHelp:"Geluid aan of uit",sharebtnHelp:"Stuur email",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod deze brochure",pagemodlebtnHelp:"Verander enkele en dubbele pagina modus",languagebtnHelp:"Verander taal",annotationbtnHelp:"Voeg opmerking toe",addbookmarkbtnHelp:"Bladwijzer toevoegen",removebookmarkbtnHelp:"Bladwijzer verwijderen",updatebookmarkbtnHelp:"Bladwijzer bijwerken",btnShoppingCart:"Winkelwagen",Help_ShoppingCartbtn:"Winkelwagen",Help_btnNextPage:"Volgende pagina",Help_btnPrePage:"Vorige pagina",Help_btnAutoFlip:"Auto flip aan",Help_StopAutoFlip:"Auto flip uit",btnaddbookmark:"Toevoegen",btndeletebookmark:"Verwijderen",btnupdatebookmark:"Bijwerken",frmyourbookmarks:"Uw bladwijzers",frmitems:"items",DownloadFullPublication:"Volledige publicatie",DownloadCurrentPage:"Huidige pagina",DownloadAttachedFiles:"Bijgesloten bestanden",lblLink:"Link",btnCopy:"Kopieer",infCopyToClipboard:"Your browser does not support clipboard.",restorePage:"Wilt u de vorige sessie herstellen?",tmpl_Backgoundsoundon:"Achtergrond geluid aan",tmpl_Backgoundsoundoff:"Achtergrond geluid uit",tmpl_Flipsoundon:"Omsla-geluid aan",tmpl_Flipsoundoff:"Omsla-geluid uit",Help_PageIndex:"Het huidige paginanummer",tmpl_PrintPageRanges:"Pagina selectie",tmpl_PrintPreview:"Vooruitblik",btnSelection:"Selecteer tekst",loginNameLabel:"Naam",btnGotoPage:"Ga",btnSettings:"Instelling",soundSettingTitle:"Geluidsinstelling",closeFlipSound:"Sluit omsla-geluid",closeBackgroundSound:"Sluit achtergrond geluid",frmShareCaption:"Delen",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Kopieer",frmShareItemsGroupCaption:"Social Share",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Ga naar bladzijde",btnPageBack:"Terug",btnPageForward:"Vooruit",SelectTextCopy:"Kopieer tekst",selectCopyButton:"Kopieer",TStuffCart_TypeCart:"Winkelwagen",TStuffCart_DetailedQuantity:"Hoeveelheid",TStuffCart_DetailedPrice:"Prijs",ShappingCart_Close:"Sluiten",ShappingCart_CheckOut:"Afrekenen",ShappingCart_Item:"Item",ShappingCart_Total:"Totaal",ShappingCart_AddCart:"Doe in de winkelwagen",ShappingCart_InStock:"In voorraad",TStuffCart_DetailedCost:"Verzendkosten",TStuffCart_DetailedTime:"Levertijd",TStuffCart_DetailedDay:"dag(en)",ShappingCart_NotStock:"Niet (genoeg) in voorraad",btnCrop:"Crop",btnDragButton:"Slepen",btnFlipBook:"Flipboek",btnSlideMode:"Dia modus",btnSinglePageMode:"Enkele pagina modus",btnVertical:"Verticale modus",btnHotizontal:"Horizontale modus",btnClose:"Sluiten",btnDoublePage:"Dubbele pagina",btnBookStatus:"Bekijk het boek",checkBoxInsert:"Voeg huidige pagina in",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"VideoGallery",btnSlideShow:"SlideShow",pnlSearchInputInvalid:"(minimaal 3 karakters)",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"add to page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"RemoveAll",tltCursor:"cursor",tltAddHighlight:"add highlight",tltAddTexts:"add texts",tltAddShapes:"add shapes",tltAddNotes:"add notes",tltAddImageFile:"add image file",tltAddSignature:"add signature",tltAddLine:"add line",tltAddArrow:"add arrow",tltAddRect:"add rect",tltAddEllipse:"add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",frmShareCaption:"Delen",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",btnRotateRight:"Rotate Right",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmDownload:"Download",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",btnDownloadPosterPrompt:"Click to download the poster",infLongPressToSavePoster:"Press and hold the mobile terminal to save the poster",infLongPressToIndentify:"Long press to identify QR code",infScanCodeToView:"Scan code to read",frmaboutcaption:"Contact",frmaboutDESCRIPTION:"Description",frmaboutAUTHOR:"Author",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",infDeleteNote:"Do you want to delete the note?",proFullScreenWarn:"Current browser does not support full-screen,Please use Chrome for best results",btnBack:"Backs",frmVideoListTitle:"Video list",frmVideoTitle:"Video",lblConfirm:"Confirm",frmBookMark:"Leeswijzer",btnFullscreen:"Volledig scherm",btnExitFullscreen:"Volledig scherm",btnMore:"Meer",frmPrintall:"Alle pagina's afdrukken",frmPrintcurrent:"Huidige pagina afdrukken",frmPrintRange:"Afdrukbereik",frmPrintexample:"Voorbeeld: 2,3,5-10",frmPrintbtn:"Afdrukken",frmaboutcontactinformation:"Contact Informatie",frmSearch:"Zoeken",frmToc:"Inhoudsopgave",btnTableOfContent:"Zobrazit Tabulka obsah",lblDescription:"Titel",frmLinkLabel:"Link",frmQrcodeCaption:"Scan de onderste twee-dimensionale code weergeven met mobiele telefoon."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[]}; bookConfig.isFlipPdf=true; var pages_information =[];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}