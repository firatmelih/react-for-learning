
# React Nedir?

  


<img  src=https://cdn.discordapp.com/attachments/750658674078253158/819180229926715422/react.png  width="200px"  align="left">

<p align="left">React, PHP ile yazılmış Facebook 'un mimari eksikliklerinden ortaya çıkmış,Interaktif mimari sunan bir JavaScript kütüphanesidir. 
2012 yılında Facebook'un Instagram'ı satın almasından sonra Facebook, Instagram'ın sadece mobil uygulaması değil ayrıca bir websitesi olmasını da istemiştir. Instagram ekibindeki yazılımcıların Facebook'un yazılımlarını örnek almaları ve bu mimari ile Instagram'ı yazmaları istenmişti. </p>
Bu mimari 2013 yılında ise JavaScript kütüphanesi olarak 2013 yılında açık kaynak olarak herkese sunuldu.
<hr>
 
## Interactive UI

  

*React, Interactive UI tasarımlarını acısız bir şekilde yapmanızı sağlar.*

  

React ilk çıktığı zamanlardan beri kendini bu "catchy" wordlerle tanıtıyor. Çoğu websitesinde, sitede gerçekleşen bir değişikliği ancak ve ancak sayfa yenilendiğinde gösteriyordu.

  
  

<p  align="left">

<img  src=https://media.discordapp.net/attachments/750658674078253158/819180228236673074/oldfacebook.png  width="200px">

</p>

Örneğin;

  

* Facebook'ta mesaj geldi mi?

* Son fotoğrafımı kaç kişi beğendi?

* Sevdiğim kişi online oldu mu?

  
  

gibi.

  

React'in Interaktif websitesi için uygun mimarisi bizi çileli bir fazdan kurtarıyor.

  

<hr>

  

## Element Odaklı

  

React Element Odaklı tasarımlar yapmanıza olanak sağlar.

  

<img  src=https://cdn.discordapp.com/attachments/750658674078253158/819180226176745489/component.png  height="100%">

  

Örneğin bir bileşeninizde hata olduğunda bunun hangi bileşen olduğunu ve hatanın bu o bileşenden kaynaklandığını bilirsiniz. Bu da size daha kolay hata ayıklama sunar.

  

Ayrıca bu bileşenlere bir state (durum) ekleyebilirsiniz. Durumlar basitçe tanımıyla bileşenin diğer bileşenlerle iletişimini sağlayan Javascript kodlarıdır.

  

Örneğin basit bir To-Do list yaptığınızı var sayalım ihtiyacımız olan bileşenler;

  

* Liste

  

* Metin Kutusu

  

* Ekleme Butonu

  

Ekleme Butonuna basıldığında state, metin kutusunda değer olup olmadığını sorgular, eğer değer varsa bunu listeye ekler. 3 farklı bileşen stateler ile iletişim halinde oldular.

  

<hr>

  

## Tek Sayfa Uygulaması

  

React aynı zamanda bir tek sayfa uygulamasıdır. Peki nedir bu Tek Sayfa Uygulaması?

  

Sunucudaki yükü hafifletmek ve daha seri bir sayfalama adına kullanılan bu yöntem ile tarayıcı siteyi ilk açtığında site beyaz, boş bir HTML sayfasıdır. Tarayıcı daha sonrasında JavaScript kodlarını indirir ve bu JavaScript kodları HTML kodlarını sayfaya render eder. Eğer kullanıcı bir başka sayfaya veya aynı sayfada bir değişiklik yaparsa, DOM sadece değişiklikleri icra eder, yeni bir site başlatmaz veya sayfayı baştan renderlamaz.

  

### Avantajları Nelerdir?

  

**Hız** : SPA (Tek Sayfa Uygulamaları)'da bütün sayfa yenilenmediği için kullanıcı tarafında inanılmaz fark edilebilir bir seviyede hızlı performans vardır. Statik HTML/CSS/JS websitelerine kıyasla bu çok hızlı olur

  
  

**Kullanıcı Deneyimi** : SPA sayesinde sayfalar arası surfing çok yumuşak ve seri olduğu için kullanıcı sanki bir uygulama indirmişçesine websitesinde dolaşır.

  

**Ön Bellekleme** : SPA yerel bilgiyi çok etkili kullanabilir, sunucuya gönderilen istekten sonra bilgiyi kullanıcının interneti yavaş olsa dahi kullanabilir. İnternet bağlantınız düzeldiğinde websitesi sunucu ile senkron bir şekilde çalışmaya devam eder.

  

**Hata Ayıklama** : Bileşen bazlı tasarımı sayesinde React projelerinde yaşadığınız hataları kolay bir şekilde bulabilirsiniz. Chrome gibi modern Web tarayıcılarının toolları ile debugging daha kolay olur. Unutmayın Chrome V8 engine kullanır, React ise JavaScript.

  

<hr>

  

## Sunucu Tarafı Render

  

Sunucu tarafı Render ile kullanıcı websitesine girdiğinde, sunucu başlangıçta boş beyaz bir HTML sayfasını cevap olarak gönderir, Tarayıcı JavaScript dosyalarınca HTML görüntüsünü render eder, fakat henüz sayfa dinamik değildir. Sonrasında Tarayıcı JavaScript kodlarını çalışır hale getirir ve site çalışır hale gelir.

  

<img  src="https://cdn.discordapp.com/attachments/750658674078253158/819180929309474836/2021-03-10-15-12-www.google.com.png" width="750px">

  

<hr>

  

## Tarayıcı Tarafı Render

  

Tarayıcı websitesine istek attığında websitesindeki JavaScript dosyaları tarayıcı tarafından indirilir. Tarayıcı bu JavaScript dosyalarını çalıştırır, ekrana HTML render edilir ve site görünür ve dinamik yapıda başlar.

  

<img  src="https://cdn.discordapp.com/attachments/750658674078253158/819180734211424256/CSR.png" width="750px">

  

<br/>

  

<hr/>

  

<br/>

  

## React ile I18n

  
  

### I18n nedir?

  

I18n basitçe websitelerinize çoklu dil desteğini sağlamak için yazılmış bir pakettir. Bu projede kullandığım ise bu paketin React'e uyarlanmış halidir.

  

### Nasıl Kurulur?

  

Öncelikle terminalden gerekli node paketlerimizi indiriyoruz.

  

```properties

melih@desktop:~$ npm install i18next react-i18next --save

```

  

src dizininde dil dosyalarını tutacak bir klasör oluşturacağız, yazdığımız kod çevirileri buradan çekecek.

  

<img  src="https://cdn.discordapp.com/attachments/750658674078253158/819483633727176725/translate-dizin.png">

  

*Ben böyle olmasını uygun gördüm, kodlarımı birebir alacaksanız hata yaşamamanız için sizin de birebir bu şekilde yapmanız gerekir.*

  

src > translations > en > common.json;

``` json

{

example:{

children: "This is an example translate."

}

}

```

src > translations > tr > common.json;

``` json

{

example:{

children: "Bu örnek bir çeviridir."

}

}

```

  

src > index.js' da ihtiyacımız olan çağırmaları yapacağız;

  

``` javascript

import {I18nextProvider} from  "react-i18next";

import i18next from  "i18next";

  

import common_tr from  "./translations/tr/common.json";

import common_en from  "./translations/en/common.json";

```

  

src > index.js' da çağırdığımız i18next' i tanımlıyoruz.

``` javascript

i18next.init({

interpolation: { escapeValue: false }, // REACT ZATENKAÇIŞ SAĞLIYOR

lng: 'en', // DEFAULT KULLANACAĞIMIZ DİL

resources: {

en: {

common: common_en // 'common' json'un adı

},

tr: {

common: common_tr

},

},

});

  

// App' i i18next'in içine alıyoruz ki kalıtımları alsın.

<I18nextProvider  i18n={i18next}>

<App/>

</I18nextProvider>

```

  

src > App.js' da çağırmalarımızı yapıyoruz.

  

``` javascript

import {useTranslation} from  "react-i18next";

```

  

src > App.js' da örnek bir translate kullanımı;

  

``` javascript

  

// TANIMLANIŞ

function  ExampleTranslate()

{

const [t, i18n] =  useTranslation('common');

return <div>

<h1>{t('example.children')}</h1>

<button  onClick={() => i18n.changeLanguage('tr')}>tr</button>

<button  onClick={() => i18n.changeLanguage('en')}>en</button>

</div>

}

  

// KULLANIM

function  App()

{

return (

<ExampleTranslate/> // Ekrana seçilen dile ait .json dosyasının belli kısmını basacaktır.

);

}

  
  

```

  

Yazan: Melih FIRAT
