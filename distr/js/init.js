function CallPluginGetQueryStringParams(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] === sParam) {
			return sParameterName[1];
		}
	}
}
function CallPluginSearchString(data) {
	for (var i = 0; i < data.length; i++) {
		var dataString = data[i].string;
		var dataProp = data[i].prop;
		if (dataString) {
			if (dataString.indexOf(data[i].subString) !== -1)
				return data[i].identity;
		}
		else if (dataProp)
			return data[i].identity;
	}
}
function CallPluginValidateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function CallPluginValidateName(name) {
    if(name.trim()!='') {
		var nameArray = name.split(" ");
		if(nameArray.length>1 && nameArray.length<3) {
			return true;
		}
		return false;
	}
	return false;
}
var labels = {
		'tr': {
			'pretext':'Çağrı merkezimiz haftanın 7 günü, 09.00-23.00 saatleri arasında hizmet vermektedir.',
			'callus':'Bizi Arayın',
			'callyou':'Sizi Arayalım',
			'name':'Adı, Soyadı',
			'phone':'Telefon',
			'email':'E-mail',
			'adults':'Yetiskin',
			'children':'Çocuklar',
			'checkin':'Giriş Tarihi',
			'checkout':'Çıkış Tarihi',
			'send':'Gönder',
			'success':'TEŞEKKÜR EDERİZ<br /> EN KISA SÜREDE SİZİ ARAYACAĞIZ',
			'permission':' Form üzerinde ilettiğim görüşümün ve bilgilerimin, yetkililerin haberdar olması amacı ile tedarikçilerle paylaşılabileceğini kabul ediyorum.',
			'subscribe': {
				'label': 'Fırsat ve kampanyalardan haberdar olmak istiyorum. <a href="#" class="call-plugin-widget-form-subscribe-details-switcher">Detaylı bilgi</a>',
				'text': ' işletmekte olduğu ve tedarikçilerine ilişkin hizmet, reklam, kampanya ve faaliyetleri hakkında; tarafıma bilgilendirme yapılmasına ve tarafımla 6563 Sayılı Kanun uyarınca ticari elektronik iletiler paylaşılmasına onay veriyor ve verdiğim onayı iptal etmek istersem bu durumu Şirketi’nin iş bu mecrada yer alan iletişim kanallarına bildirmeyi kabul ediyorum.'
			},
			'errors': {
				'name':'Adı ve Soyadı alanı doldurunuz, lütfen',
				'email':'E-mail alanı doldurunuz, lütfen',
				'phone':'Telefon alanı doldurunuz, lütfen',
				'ajax':'Gönderiminiz işlenirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.'
			}
		},
		'en': {
			'pretext':'Our call center operates 7 days a week, between 09.00-23.00.',
			'callus':'Call us',
			'callyou':'Let us call you',
			'name':'Name, Surname',
			'phone':'Phone',
			'email':'E-mail',
			'adults':'Adults',
			'children':'Children',
			'checkin':'Check-in',
			'checkout':'Check-out',
			'send':'Send',
			'success':'THANK YOU<br /> WE WILL CALL YOU ASAP',
			'permission':'I agree that my opinions and information on the form can be shared with suppliers in order to keep the authorities informed.',
			'subscribe': {
				'label': 'I want to be informed about opportunities and campaigns. <a href="#" class="call-plugin-widget-form-subscribe-details-switcher">More information</a>',
				'text': ' işletmekte olduğu ve tedarikçilerine ilişkin hizmet, reklam, kampanya ve faaliyetleri hakkında; tarafıma bilgilendirme yapılmasına ve tarafımla 6563 Sayılı Kanun uyarınca ticari elektronik iletiler paylaşılmasına onay veriyor ve verdiğim onayı iptal etmek istersem bu durumu Şirketi’nin iş bu mecrada yer alan iletişim kanallarına bildirmeyi kabul ediyorum.'
			},
			'errors': {
				'name':'Please, fill Name and Surname field',
				'email':'Please, fill Email field',
				'phone':'Please, fill Phone field',
				'ajax':'There was an error while processing of your submission. Please, try again later.'
			}
		},
		'de': {
			'pretext':'Unser Callcenter ist 7 Tage die Woche zwischen 09.00 und 23.00 Uhr geöffnet.',
			'callus':'Rufen Sie uns an',
			'callyou':'Lassen Sie sich von uns anrufen',
			'name':'Vorname, Nachname',
			'phone':'Telefon',
			'email':'E-mail',
			'adults':'Erwachsene',
			'children':'Kinder',
			'checkin':'Check-In',
			'checkout':'Check-Out',
			'send':'Senden',
			'success':'DANKE<br /> WIR RUFEN SIE SO SCHNELL WIE MÖGLICH AN',
			'permission':'Ich bin damit einverstanden, dass meine Meinungen und Informationen auf dem Formular mit den Lieferanten geteilt werden können, damit die Behörden informiert werden.',
			'subscribe': {
				'label': 'Ich möchte über Möglichkeiten und Kampagnen informiert werden. <a href="#" class="call-plugin-widget-form-subscribe-details-switcher">Detaillierte Informationen</a>',
				'text': ' işletmekte olduğu ve tedarikçilerine ilişkin hizmet, reklam, kampanya ve faaliyetleri hakkında; tarafıma bilgilendirme yapılmasına ve tarafımla 6563 Sayılı Kanun uyarınca ticari elektronik iletiler paylaşılmasına onay veriyor ve verdiğim onayı iptal etmek istersem bu durumu Şirketi’nin iş bu mecrada yer alan iletişim kanallarına bildirmeyi kabul ediyorum.'
			},
			'errors': {
				'name':'Bitte füllen Sie das Feld Name und Nachname aus',
				'email':'Bitte füllen Sie das Feld E-Mail aus',
				'phone':'Bitte füllen Sie das Feld Telefon aus',
				'ajax':'Bei der Verarbeitung Ihrer Einreichung ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.'
			}
		},
		'ru': {
			'pretext':'Наш колл-центр работает 7 дней в неделю, с 09.00 до 23.00.',
			'callus':'Позвоните нам',
			'callyou':'Мы позвоним Вам',
			'name':'Имя, Фамилия',
			'phone':'Телефон',
			'email':'E-mail',
			'adults':'Взрослые',
			'children':'Дети',
			'checkin':'Въезд',
			'checkout':'Выезд',
			'send':'Отправить',
			'success':'СПАСИБО<br /> ВСКОРЕ МЫ ВАМ ПЕРЕЗВОНИМ',
			'permission':'Я согласен с тем, что мои мнения и информация в форме могут быть переданы поставщикам, чтобы информировать власти.',
			'subscribe': {
				'label': 'Я хочу получать информацию о возможностях и кампаниях. <a href="#" class="call-plugin-widget-form-subscribe-details-switcher">Подробная информация</a>',
				'text': ' işletmekte olduğu ve tedarikçilerine ilişkin hizmet, reklam, kampanya ve faaliyetleri hakkında; tarafıma bilgilendirme yapılmasına ve tarafımla 6563 Sayılı Kanun uyarınca ticari elektronik iletiler paylaşılmasına onay veriyor ve verdiğim onayı iptal etmek istersem bu durumu Şirketi’nin iş bu mecrada yer alan iletişim kanallarına bildirmeyi kabul ediyorum.'
			},
			'errors': {
				'name':'Пожалуйста, заполните поле Имя, Фамилия',
				'email':'Пожалуйста, заполните поле Email',
				'phone':'Пожалуйста, заполните поле Телефон',
				'ajax':'Во время обработки Вашего запроса произошла ошибка. Пожалуйста, повторите позже.'
			}
		}
	},
	$label,
	browserList = [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{
			string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "IE",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS = [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.userAgent,
			subString: "iPhone",
			identity: "iPhone/iPod"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	],
	countries = '<option value="1">+1</option><option value="7">+7</option><option value="20">+20</option><option value="27">+27</option><option value="30">+30</option><option value="31">+31</option><option value="32">+32</option><option value="33">+33</option><option value="34">+34</option><option value="36">+36</option><option value="39">+39</option><option value="40">+40</option><option value="41">+41</option><option value="43">+43</option><option value="44">+44</option><option value="45">+45</option><option value="46">+46</option><option value="47">+47</option><option value="48">+48</option><option value="49">+49</option><option value="51">+51</option><option value="52">+52</option><option value="53">+53</option><option value="54">+54</option><option value="55">+55</option><option value="56">+56</option><option value="57">+57</option><option value="58">+58</option><option value="60">+60</option><option value="61">+61</option><option value="62">+62</option><option value="63">+63</option><option value="64">+64</option><option value="65">+65</option><option value="66">+66</option><option value="81">+81</option><option value="82">+82</option><option value="84">+84</option><option value="86">+86</option><option value="90" selected="selected">+90</option><option value="91">+91</option><option value="92">+92</option><option value="93">+93</option><option value="94">+94</option><option value="95">+95</option><option value="98">+98</option><option value="212">+212</option><option value="213">+213</option><option value="216">+216</option><option value="218">+218</option><option value="220">+220</option><option value="221">+221</option><option value="222">+222</option><option value="223">+223</option><option value="224">+224</option><option value="225">+225</option><option value="226">+226</option><option value="227">+227</option><option value="228">+228</option><option value="229">+229</option><option value="230">+230</option><option value="231">+231</option><option value="232">+232</option><option value="233">+233</option><option value="234">+234</option><option value="235">+235</option><option value="236">+236</option><option value="237">+237</option><option value="238">+238</option><option value="239">+239</option><option value="240">+240</option><option value="241">+241</option><option value="242">+242</option><option value="243">+243</option><option value="244">+244</option><option value="245">+245</option><option value="246">+246</option><option value="247">+247</option><option value="248">+248</option><option value="249">+249</option><option value="250">+250</option><option value="251">+251</option><option value="252">+252</option><option value="253">+253</option><option value="254">+254</option><option value="255">+255</option><option value="256">+256</option><option value="257">+257</option><option value="258">+258</option><option value="260">+260</option><option value="261">+261</option><option value="262">+262</option><option value="263">+263</option><option value="264">+264</option><option value="265">+265</option><option value="266">+266</option><option value="267">+267</option><option value="268">+268</option><option value="290">+290</option><option value="291">+291</option><option value="297">+297</option><option value="298">+298</option><option value="299">+299</option><option value="350">+350</option><option value="351">+351</option><option value="352">+352</option><option value="353">+353</option><option value="354">+354</option><option value="355">+355</option><option value="356">+356</option><option value="357">+357</option><option value="358">+358</option><option value="359">+359</option><option value="370">+370</option><option value="371">+371</option><option value="372">+372</option><option value="373">+373</option><option value="374">+374</option><option value="375">+375</option><option value="376">+376</option><option value="377">+377</option><option value="378">+378</option><option value="380">+380</option><option value="381">+381</option><option value="382">+382</option><option value="385">+385</option><option value="386">+386</option><option value="387">+387</option><option value="389">+389</option><option value="420">+420</option><option value="421">+421</option><option value="423">+423</option><option value="500">+500</option><option value="501">+501</option><option value="502">+502</option><option value="503">+503</option><option value="504">+504</option><option value="505">+505</option><option value="506">+506</option><option value="507">+507</option><option value="508">+508</option><option value="509">+509</option><option value="555">+555</option><option value="590">+590</option><option value="591">+591</option><option value="592">+592</option><option value="593">+593</option><option value="594">+594</option><option value="595">+595</option><option value="596">+596</option><option value="597">+597</option><option value="598">+598</option><option value="599">+599</option><option value="672">+672</option><option value="673">+673</option><option value="674">+674</option><option value="675">+675</option><option value="676">+676</option><option value="677">+677</option><option value="678">+678</option><option value="679">+679</option><option value="681">+681</option><option value="682">+682</option><option value="683">+683</option><option value="685">+685</option><option value="686">+686</option><option value="687">+687</option><option value="688">+688</option><option value="689">+689</option><option value="691">+691</option><option value="692">+692</option><option value="850">+850</option><option value="852">+852</option><option value="853">+853</option><option value="855">+855</option><option value="856">+856</option><option value="880">+880</option><option value="886">+886</option><option value="960">+960</option><option value="961">+961</option><option value="962">+962</option><option value="963">+963</option><option value="964">+964</option><option value="965">+965</option><option value="966">+966</option><option value="967">+967</option><option value="968">+968</option><option value="970">+970</option><option value="971">+971</option><option value="972">+972</option><option value="973">+973</option><option value="974">+974</option><option value="975">+975</option><option value="976">+976</option><option value="977">+977</option><option value="992">+992</option><option value="993">+993</option><option value="994">+994</option><option value="995">+995</option><option value="996">+996</option><option value="998">+998</option><option value="1242">+1242</option><option value="1246">+1246</option><option value="1264">+1264</option><option value="1268">+1268</option><option value="1284">+1284</option><option value="1340">+1340</option><option value="1345">+1345</option><option value="1441">+1441</option><option value="1473">+1473</option><option value="1649">+1649</option><option value="1664">+1664</option><option value="1670">+1670</option><option value="1671">+1671</option><option value="1684">+1684</option><option value="1758">+1758</option><option value="1767">+1767</option><option value="1784">+1784</option><option value="1787">+1787</option><option value="1808">+1808</option><option value="1809">+1809</option><option value="1829">+1829</option><option value="1868">+1868</option><option value="1869">+1869</option><option value="1876">+1876</option><option value="1907">+1907</option><option value="1939">+1939</option><option value="2693">+2693</option><option value="2697">+2697</option><option value="5555">+5555</option>',
	lang = $('.call-plugin-widget').attr('data-lang')?$('.call-plugin-widget').attr('data-lang'):'tr',
	phone = $('.call-plugin-widget').attr('data-phone'),
	phonelink = $('.call-plugin-widget').attr('data-phone-link');
	company = $('.call-plugin-widget').attr('data-company'),
	kvkk = $('.call-plugin-widget').attr('data-kvkk')?$('.call-plugin-widget').attr('data-kvkk'):'',
	kvkkLabel = '';
	if(labels[lang] && labels[lang].length) {
		$label = labels[lang];
	}
	else {
		$label = labels['tr'];
	}
	if(kvkk!='') {
		kvkkLabel = `
		<div class="call-plugin-widget-form-input-box">
			<label class="call-plugin-widget-form-check-box-wrapper">
				<input type="checkbox" name="kvkk" value="1"/>
				<div class="call-plugin-widget-form-check-box"></div>
				<a href="`+kvkk+`" target="_blank">Kişisel Verilerin Korunması ve Gizlilik Politikası</a>'nı okudum.
			</label>
		</div>`;
	}
if($('.call-plugin-widget').length) {
	$('.call-plugin-widget').append(
		`
		<button type="button" class="call-plugin-widget-switcher">
			<svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.979 511.979" xml:space="preserve"><path d="M376.354,331.755c-10.897-6.212-22.17-8.166-31.753-5.521c-7.202,1.997-13.073,6.554-17.024,13.193c-8.713,10.419-19.507,22.579-22.127,24.474c-20.198,13.687-36.258,12.066-53.709-5.367l-98.022-98.022c-17.442-17.451-19.055-33.51-5.393-53.683c1.911-2.637,14.089-13.44,24.499-22.144c6.639-3.959,11.187-9.83,13.184-17.033c2.662-9.574,0.7-20.855-5.564-31.838c-1.476-2.526-36.608-62.037-68.992-79.172c-16.435-8.704-36.309-5.7-49.459,7.441L40.346,85.73c-63.155,63.164-51.473,141.619,33.801,226.893l125.491,125.483c49.161,49.169,96.06,73.873,139.068,73.873c31.582-0.009,61.073-13.329,87.817-40.073l21.649-21.649c13.15-13.15,16.137-33.024,7.441-49.459C438.468,368.414,378.965,333.282,376.354,331.755z M436.096,438.191l-21.641,21.649c-56.055,56.047-124.262,44.681-202.752-33.801L86.212,300.557C7.731,222.067-3.644,153.852,52.412,97.796l21.649-21.649c4.838-4.83,11.204-7.356,17.664-7.356c3.985,0,8.013,0.964,11.742,2.935c28.109,14.865,61.918,72.132,62.208,72.619c3.823,6.724,5.282,13.73,3.891,18.748c-0.853,3.072-2.756,5.402-5.828,7.125l-1.28,0.887c-7.279,6.067-24.602,20.762-28.237,26.121c-5.227,7.715-8.738,15.304-10.552,22.753c-6.056-12.092-10.922-26.141-12.533-41.658c-0.486-4.685-4.676-8.158-9.37-7.612c-4.685,0.486-8.09,4.685-7.603,9.37c6.161,59.332,52.301,97.963,54.263,99.576c0.324,0.267,0.666,0.499,1.015,0.71l90.234,90.234c0.237,0.237,0.477,0.459,0.714,0.693c0.365,0.613,0.804,1.194,1.336,1.718c1.613,1.587,40.141,38.972,98.978,45.082c0.299,0.034,0.597,0.043,0.887,0.043c4.318,0,8.021-3.26,8.482-7.654c0.486-4.685-2.927-8.875-7.612-9.37c-18.044-1.87-34.095-7.14-47.42-13.276c6.558-1.961,13.223-5.229,19.983-9.811c5.359-3.627,20.053-20.941,26.121-28.22l0.887-1.289c1.724-3.072,4.062-4.975,7.125-5.828c5.018-1.382,12.023,0.06,18.654,3.84c16.034,9.395,60.356,38.903,72.713,62.259C445.696,418.556,443.913,430.374,436.096,438.191z"/><path d="M366.633,0c-79.991,0-145.067,57.054-145.067,127.189c0,24.124,7.706,47.497,22.323,67.806c-3.055,31.65-9.967,54.101-19.567,63.411c-2.765,2.679-3.396,6.878-1.536,10.249c1.527,2.765,4.42,4.412,7.475,4.412c0.666,0,1.34-0.077,2.014-0.239c1.886-0.461,44.885-11.059,77.013-28.792c18.15,6.861,37.419,10.342,57.344,10.342c79.991,0,145.067-57.054,145.067-127.189S446.624,0,366.633,0z M366.633,237.312c-13.345,0-26.347-1.741-38.837-5.18c18.556-12.44,18.553-13.469,18.461-18.016c-0.068-2.935-1.647-5.666-4.164-7.177c-3.712-2.227-8.431-1.314-11.059,1.98c-3.197,2.544-15.964,11.212-26.9,18.421c-17.11,9.98-39.014,17.89-54.893,22.891c5.888-14.106,9.882-33.152,11.938-56.969c0.188-2.108-0.427-4.215-1.707-5.897c-13.636-17.929-20.838-38.741-20.838-60.177c0-60.723,57.421-110.123,128-110.123s128,49.399,128,110.123S437.212,237.312,366.633,237.312z"/><path d="M306.9,110.933h119.467c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533H306.9c-4.71,0-8.533,3.823-8.533,8.533C298.366,107.11,302.189,110.933,306.9,110.933z"/><path d="M451.966,145.067H281.3c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h170.667c4.71,0,8.533-3.823,8.533-8.533C460.5,148.89,456.677,145.067,451.966,145.067z"/></svg>
		</button>
		<div class="call-plugin-widget-wrapper">
			<div class="call-plugin-widget-wrapper-pretext">
				`+$label['pretext']+`
			</div>
			<a href="tel:`+phonelink+`" class="call-plugin-widget-wrapper-phone">`+$label['callus']+`<span>`+phone+`</span></a>
			<button class="call-plugin-widget-wrapper-form-switcher">`+$label['callyou']+`</button>
		</div>`);
	$('body').append(`
		<div class="call-plugin-widget-form-wrapper">
			<button type="button" class="call-plugin-widget-form-wrapper-close"></button>
			<div class="call-plugin-widget-form-container">
				<form class="call-plugin-widget-form" name="call-plugin-widget-form" action="" method="post">
					<input type="hidden" name="dil" id="Dil" value="`+lang+`" />
					<input type="hidden" name="mesaj" value="" />
					<input type="hidden" name="izin" value="1" />
					<input type="hidden" name="aranma_zamani" value="0" />
					<input type="hidden" name="cocuk" value="0" />
					<input type="hidden" name="yetiskin" value="1" />
					<input type="hidden" name="giristarihi" value="" />
					<input type="hidden" name="cikistarihi" value="" />
					<div class="loading">
						<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
					</div>
					<p>`+$label['pretext']+`</p>
					<div class="call-plugin-widget-form-input-box">
						<label>`+$label['name']+` *</label>
						<input type="text" name="name" placeholder="`+$label['name']+` *" value="" tabindex=1 autocomplete="off" autocapitalize="off" spellcheck="false" autocorrect="off" required />
						<div class="call-plugin-widget-form-input-error">`+$label['errors']['name']+`</div>
					</div>
					<div class="call-plugin-widget-form-input-box">
						<label>`+$label['phone']+` *</label>
						<div class="call-plugin-widget-form-phone-box">
							<select class="call-plugin-widget-form-phone-code" name="phonecode" tabindex=2 autocomplete="off" autocapitalize="off" spellcheck="false" autocorrect="off" required >
							`+countries+`
							</select>
							<input type="text" name="phone" placeholder="(000) 000 00 00" value="" tabindex=3 autocomplete="off" autocapitalize="off" spellcheck="false" autocorrect="off" required  />
						</div>
						<div class="call-plugin-widget-form-input-error">`+$label['errors']['phone']+`</div>
					</div>
					<div class="call-plugin-widget-form-input-box">
						<label>`+$label['email']+` *</label>
						<input type="text" name="email" placeholder="`+$label['email']+` *" value=""  tabindex=4 autocomplete="off" autocapitalize="off" spellcheck="false" autocorrect="off"  required />
						<div class="call-plugin-widget-form-input-error">`+$label['errors']['email']+`</div>
					</div>
					<div class="call-plugin-widget-form-input-box">
						<label class="call-plugin-widget-form-check-box-wrapper">
							<input type="checkbox" name="permission" value="1"/>
							<div class="call-plugin-widget-form-check-box"></div>
							`+$label['permission']+`
						</label>
					</div>
					<div class="call-plugin-widget-form-input-box">
						<label class="call-plugin-widget-form-check-box-wrapper">
							<input type="checkbox" name="subs" value="1"/>
							<div class="call-plugin-widget-form-check-box"></div>
							`+$label['subscribe']['label']+`
						</label>
					</div>`+kvkkLabel+`
					<div class="call-plugin-widget-form-hidden-box">
						`+company+` `+$label['subscribe']['text']+`
					</div>
					<div class="call-plugin-widget-form-input-box">
						<button type="submit" class="call-plugin-widget-form-submit">`+$label['send']+`</button>
					</div>
				</form>
				<p class="call-plugin-widget-form-submit-result">`+$label['success']+`</p>
			</div>
		</div>
		`);
	$('.call-plugin-widget-form-wrapper input[name="email"]').inputmask({
		oncomplete: function() {
			var input = $(this);
			if(CallPluginValidateEmail(input.val())) {
				input.closest('.call-plugin-widget-form-input-box').removeClass('error');
			}
			else {
				input.closest('.call-plugin-widget-form-input-box').addClass('error');
			}
		},
		onincomplete: function() {
			$(this).closest('.call-plugin-widget-form-input-box').addClass('error');
		}
	});
	$('.call-plugin-widget-form-wrapper form input[name="name"]').inputmask({
		oncomplete: function() {
			var input = $(this);
			if(CallPluginValidateName(input.val())) {
				input.closest('.call-plugin-widget-form-input-box').removeClass('error');
			}
			else {
				input.closest('.call-plugin-widget-form-input-box').addClass('error');
			}
		},
		onincomplete: function() {
			$(this).closest('.call-plugin-widget-form-input-box').addClass('error');
		}
	});
	$('.call-plugin-widget-form-wrapper input[name="phone"]').inputmask({
		'mask':'(999) 999-99-99',
		oncomplete: function() {
			$(this).closest('.call-plugin-widget-form-input-box').removeClass('error');
		},
		onincomplete: function() {
			$(this).closest('.call-plugin-widget-form-input-box').addClass('error');
		}
	});
	$('.call-plugin-widget .call-plugin-widget-switcher').click(function(e) {
		e.preventDefault();
		$(this).closest('.call-plugin-widget').find('.call-plugin-widget-wrapper').toggle();
	});
	$('.call-plugin-widget .call-plugin-widget-wrapper .call-plugin-widget-wrapper-form-switcher').click(function(e) {
		e.preventDefault();
		$('.call-plugin-widget-form-wrapper').show();
	});
	$('.call-plugin-widget-form-wrapper .call-plugin-widget-form-wrapper-close').click(function(e) {
		e.preventDefault();
		$('.call-plugin-widget-form-wrapper').hide();
		$('.call-plugin-widget .call-plugin-widget-wrapper').hide();
	});
	$('.call-plugin-widget-form-wrapper .call-plugin-widget-form-check-box-wrapper .call-plugin-widget-form-subscribe-details-switcher').click(function(e) {
		e.preventDefault();
		$('.call-plugin-widget-form-wrapper .call-plugin-widget-form-hidden-box').slideToggle(250);
	});
	$('.call-plugin-widget-form-wrapper input[type="checkbox"]').change(function() {
		console.log('change');
		$(this).closest('.call-plugin-widget-form-input-box').removeClass('error');
	});
	$('.call-plugin-widget-form-wrapper form .call-plugin-widget-form-submit').click(function(e) {
		e.preventDefault();
		var form = $(this).closest('form'),
			errors = form.find('.call-plugin-widget-form-input-box.error'),
			name = form.find('input[name="name"]'),
			phone = form.find('input[name="phone"]'),
			phonecode = form.find('input[name="phonecode"]'),
			email = form.find('input[name="email"]'),
			nameBox = name.closest('.call-plugin-widget-form-input-box'),
			nameValue = name.val(),
			phoneBox = phone.closest('.call-plugin-widget-form-input-box'),
			phoneValue = phone.val(),
			emailBox = email.closest('.call-plugin-widget-form-input-box'),
			emailValue = email.val(),
			permission = form.find('input[name="permission"]'),
			permissionBox = permission.closest('.call-plugin-widget-form-input-box'),
			subscribe = form.find('input[name="subs"]'),
			subscribeBox = subscribe.closest('.call-plugin-widget-form-input-box'),
			kvkkCheck = form.find('input[name="kvkk"]'),
			kvkkBox = kvkkCheck.closest('.call-plugin-widget-form-input-box'),
			errors = form.find('.call-plugin-widget-form-input-box.error').length;
		if(errors==0) {
			if(!CallPluginValidateName(nameValue)) {
				nameBox.addClass('error');
				errors++;
			}
			if(!CallPluginValidateEmail(emailValue)) {
				emailBox.addClass('error');
				errors++;
			}
			if(phoneValue.trim()=='') {
				phoneBox.addClass('error');
				errors++;
			}
			if(!permission.prop('checked')) {
				permissionBox.addClass('error');
				errors++;
			}
			if(!subscribe.prop('checked')) {
				subscribeBox.addClass('error');
				errors++;
			}
			if(kvkk!='' && !kvkkCheck.prop('checked')) {
				kvkkBox.addClass('error');
				errors++;
			}
			if(errors==0) {
				$('.call-plugin-widget-form-wrapper form .error').removeClass('error');
				$('.call-plugin-widget-form-wrapper .call-plugin-widget-form').addClass('call-plugin-widget-processing');
				form.submit();
			}
			/*
			if(nameValue.trim()!='') {
				var nameArray = nameValue.split(" ");
				nameBox.removeClass('error');
				if(nameArray.length>1 && nameArray.length<4) {
					nameBox.removeClass('error');
					if(phoneValue.trim()!='') {
						phoneBox.removeClass('error');
						if(emailValue.trim()!='') {
							emailBox.removeClass('error');
							if(permission.prop('checked')) {
								if(subscribe.prop('checked')) {
									if(kvkk!='') {
										if(kvkkCheck.prop('checked')) {
											$('.call-plugin-widget-form-wrapper form .error').removeClass('error');
											$('.call-plugin-widget-form-wrapper .call-plugin-widget-form').addClass('call-plugin-widget-processing');
											form.submit();
											return;
										}
										kvkkBox.addClass('error');
										return;
									}
									else {
										$('.call-plugin-widget-form-wrapper form .error').removeClass('error');
										$('.call-plugin-widget-form-wrapper .call-plugin-widget-form').addClass('call-plugin-widget-processing');
										form.submit();
										return;
									}
								}
								subscribeBox.addClass('error');
								return;
							}
							permissionBox.addClass('error');
							return;
						}
						emailBox.addClass('error');
						return;
					}
					phoneBox.addClass('error');
					return;
				}
				nameBox.addClass('error');
				return;
			}
			nameBox.addClass('error');
			return;
			*/
		}
	});
	$('.call-plugin-widget-form-wrapper form').submit(function(e) {
		e.preventDefault();
		console.log ('submit');
		var form = $(this),
			names = ['dil','mesaj','izin','aranma_zamani','ad_soyad','telefon','eposta','yetiskin','cocuk','giristarihi','cikistarihi'],
			values = [],
			utm_source = (CallPluginGetQueryStringParams('utm_source') ? CallPluginGetQueryStringParams('utm_source') : 'direct'),
			utm_medium = (CallPluginGetQueryStringParams('utm_medium') ? CallPluginGetQueryStringParams('utm_medium') : 'direct'),
			utm_campaign = (CallPluginGetQueryStringParams('utm_campaign') ? CallPluginGetQueryStringParams('utm_campaign') : 'direct'),
			utm_term = (CallPluginGetQueryStringParams('utm_term') ? '/' + CallPluginGetQueryStringParams('utm_term') : ''),
			UTMCode = utm_source + "/" + utm_medium + "/" + utm_campaign + utm_term,
			CurrUrl =  document.location.href,
			RefUrl = document.referrer,
			Browser = CallPluginSearchString(browserList) || "An unknown browser",
			OS = CallPluginSearchString(dataOS) || "an unknown OS";
		for(var i=0;i<names.length;i++) {
			switch(names[i]) {
				case 'ad_soyad': values.push(names[i]+'='+form.find('input[name="name"]').val());break;
				case 'telefon': 
					var phone = form.find('input[name="phone"]').val();
					values.push(names[i]+'=+'+form.find('select[name="phonecode"]').val()+phone.replace(/[^0-9]/g,''));break;
				case 'eposta': values.push(names[i]+'='+form.find('input[name="email"]').val());break;
				default: values.push(names[i]+'='+form.find('input[name="'+names[i]+'"]').val());break;
			}
		}
		values.push('sayfa_adi='+UTMCode);
		values.push('refurl='+RefUrl);
		values.push('cururl='+CurrUrl);
		values.push('os='+OS);
		values.push('browser='+Browser);	
		
		$.ajax({
			url: '//www.crmfys.com/public/form.php?action=submit&fields=' + names.join(','),
			type: 'POST',
			dataType: 'json',
			// async: false,
			crossDomain: true,
			contentType: "text/plain; charset=utf-8",
			data: values.join('&'),
			success: function (data) {
				$('.call-plugin-widget-form-wrapper .call-plugin-widget-form').removeClass('call-plugin-widget-processing');
				if (data.success) {
					$('.call-plugin-widget-form-wrapper .call-plugin-widget-form').hide();
					$('.call-plugin-widget-form-wrapper .call-plugin-widget-form-submit-result').show();
				}
				else {
					alert(data.errorText);
					$('.call-plugin-widget-form-wrapper .call-plugin-widget-form').removeClass('call-plugin-widget-processing');
				}
			}, 
			error: function () {
				$('.call-plugin-widget-form-wrapper .call-plugin-widget-form').removeClass('call-plugin-widget-processing');
				alert($label['errors']['ajax']);
			}
		});
	});
}