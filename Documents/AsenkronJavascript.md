# Asenkron Javasciprt

JavaScript öncelikle Single Thread bir yazılım dilidir. 

# Single Thread

Signle Thread, bir programlama dilinin bir seferde tek bir iş grubunu işleme alabilmesi demektir. Yazılan fonksiyondaki sonsuz bir döngünün diğer satırların okunamamasını ve bütün programın kitlenmesine neden olur. Multi Thread sistemlerde ise böyle bir durumda belli thread kilitlenir, diğer thread'ler çalışmaya devam eder.

# Senkron

Senkron, bütün kodların sırayla çalışması demektir. Fonksiyonları, olayları ve çağırmaları sıraya sokarak hepsini tek bir thread ile çalıştırır. Bu çağırmalar, olaylar Queue (Kuyruk) sistemi ile adlandırılır. Thread'in kuyrukta sıradaki işlemi işleyip bir başka olayı işleme almasına Olay Döngüsü denir. Kuyruğa alınma sırası JavaScript'te yukarıdan aşağıya doğrudur.

Örneğin;

``` js
console.log('ilk bu kod çalışır');
console.log('sonra bu');
console.log('en son da bu');
```

<hr>

Sıralı yapıdan kaçmanın yolları JavaScript'in EcmaScript6 ile bize sunduğu Asenkron fonksiyonlar sayesinde olmuştur.

# Asenkron

Asenkron, bir fonksiyon işlenirken bu fonksiyonun bitmesinin beklenmeyip diğer fonksiyonların işleme alınmasına denir. Güzel bir örnek ile pekiştirelim;



Örneğin kahvaltı hazırlayacaksınız, ama tek başınızasınız (Single Thread) ve fazla zamanınız yok. Ekmekleri kızartmaya koyuyorsunuz ve kızarmasını beklemeyip (Asenkron yapı) daha kısa süren domatesleri dilimliyorsunuz ve dilimleme işleminden bile daha sonrasında ekmekleriniz kızarmış oluyor.

<img src="https://cdn.discordapp.com/attachments/750658674078253158/821564117022015488/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2-large-landscape-150.jpg" style="width:500px">


 Mesela diyelim ki son defa bu yöntemi yaptığınızda ekmekleriniz yandı, bu yüzden bugün farklı bir yoldan gideceksiniz, bunu belirliyorsunuz (fonksiyonun başına yazılan async) sonrasında ekmek kızarana kadar başında beklemeye karar veriyorsunuz (fonksyionun başına yazılan await) ekmekler kızardıktan sonra domates dilimlemeye koyuluyorsunuz.

<hr>

Bazı durumlarda JavaScript'in asenkron özelliği bizi **Async / Await**, **Callback** ve **Promise** gibi yollara itebilir;

# Async / Await

Async / Await genellikle API'ye atılan isteklerde kullanılır.

Eğer Async / Await kullanmazsak oluşacak durumu Mutfak örneği ile örnekleyebiliriz;

<img src="https://cdn.discordapp.com/attachments/750658674078253158/821563882078339112/ETUD_4_gastronomie.jpg"  style="width:500px">


Mutfağa bir yemek pişirilmesi, tabaklanılması ve servis edilmesi ile ilgili 3 farklı fonksiyon veriliyor. Mutfak yemeği pişirmeye koyarken, tabak çıkartıyor ve servise gidiyor. Yemeğin hazırlanıp tabağa konmasını beklemeden tabak çıkarttık ve sunduk. Mutfaktan çıkan tabağın içi boştur.

Async / Await örneğimizin konu hakkında güzel bir mantık oluşturduğunu farzederek kullanımına geçelim;

Öncelikle Async fonksiyon çağırmak için fonksiyonumuzun başına `async` yazarız:

```js
async function()
{
  console.log('hello world');
  return 1;
}
```

Fonksiyondan önce gelen async kelimesi bir şeyi ifade eder, bu fonksiyon her zaman promise döndürecektir. 

Mesela bu fonksyion çözülmüş bir promise olan 1'i döndürecektir.

``` js
async function returnOne()
{
  return 1;
}

returnOne().then(console.log);
```

Konsolda göreceğimiz:

```
1
>Promise{<fullfilled>:undefined}
```

direkt olarak Promise döndürsek de sonuç aynı olacaktır:

``` js
async function returnOne()
{
  return Promise.resolve(1);
}

returnOne().then(console.log);
```

Konsolda göreceğimiz:

```
1
>Promise{<fullfilled>:undefined}
```

# Await

`await` anahtarı sadece `async` fonksiyonlarda çalışır. Amacı JavaScript'in ilgili fonksiyonun sonuç döndürene kadar beklemesini sağlamaktır.

Şimdi yapacağımız örnekte 1 saniye süren bir fonksyion ve hemen sonrasında milisaniyeler içerisinde çalışıp biten bir fonksiyon çağıracağız.

``` js

 function fonksiyon() {
  setTimeout(function ()
        {
         let notPromise = "done";
        }, 1000);
  let result =  notPromise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

fonksiyon();
```

Konsolda göreceğimiz:


```
Uncaught ReferenceError: promise is not defined
    at f (<anonymous>:6:17)
    at <anonymous>:11:1
```

Bunun sebebi Asenkron çalışan JavaScript, `notPromise` değişkeninin değerinin atanmasını beklemeden konsolda bu değeri çağırıyor.

Buna engel olmak için, notPromise değerinin atanmasını ve döndürülmesini beklememiz gerekir. Bunu şöyle sağlarız:

``` js

 async function fonksiyon() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000)
  });

  let result = await promise; 

  console.log(result); 
}

fonksiyon();
```

Bu fonksiyon haliyle 1 saniye boyunca değerin atanmasını bekleyecek, değer atanınca konsola değer bastırılacaktır.

Konsolda göreceğimiz:

```
>Promise {<pending>}
done
```
Buradaki pending, değerin atanmasının beklendiği anlamına gelmektedir.

Unutmayın, bunu sadece `async` fonksyionlarda yapabilirsiniz, normal fonksiyonlarda yapamazsınız.

# CallBack

Bu durumu bir kod bloğu ile basitçe anlayabiliriz;

``` js
function ilk(){console.log('ilk');}
function ikinci(){console.log('ikinci');}
ilk();
ikinci();
```

``` bash
ilk
ikinci
```

ilk fonksiyonumuz çalıştırıldıktan sonra bitmesi beklenmeyip ikinci fonksiyon çalışır, bitmesinin beklenmediğini görmek için ilk fonksiyonumuzu geciktirelim, fakat yine üste yazalım;

``` js
function ilk()
    {
        setTimeout(function ()
        {
        console.log('ilk');
        }, 500);
    
    }
function ikinci(){console.log('ikinci');}
ilk();
ikinci();
```

``` bash
ikinci
ilk
```
Görüldüğü gibi JavaScript ilk fonksiyonun bitmesini beklemedi böylelikle ikinci fonksiyon daha geç başlasa bile daha kısa sürdüğü için önce bitti ve konsolda önce basıldı.

Diyelim ki ilk fonksiyon her ne kadar uzun sürerse sürsün bitene kadar ikinci fonksiyona geçilmesin fakat diğer fonksiyonları da kitlemesin;

``` js
function ilk(callback) {
  setTimeout(
      function () { 
            console.log('ilk');
            callback() 
      }, 500); 
} 

function ikinci() { 
    console.log('ikinci');
} 

ilk(ikinci); 
```

``` bash
ilk
ikinci
```

Böylelikle ne bütün program kitlenir ne de biri önce bitmesi gereken sıralı iki programda karışıklık yaşarız.





# Promise

Çok klasik açıklayıcı bir örnek ile anlatırsak;

 Diyelim ki bir hamburgerciye gittiniz ve kasada siparişinizi verdiniz. Kasiyer de size siparişinizi hazırladıklarında haber vermek üzere bir elektronik alet teslim etti. Şu anda hamburger bizim için gelecekte elde edebileceğimiz bir değer. Elimizdeki aygıt da bu değere ulaşmamız için müessesenin bize verdiği sözün (işte promise) bir göstergesi. Aygıt bildirim alıncaya kadar bekleme (pending) durumundadır. Bildirim geldiğinde ise ya hamburgerimiz başarılı (resolved) bir şekilde hazırlanmıştır, ya da beklenenin dışına çıkarak başarısız (rejected) olmuştur. Başarılı durumda afiyetle yemeğimize yumuluruz tabii ki. Başarısız durum biraz daha nahoş olacaktır. Kasiyerle kavga ederek veya yeniden sipariş vererek hatalı durumu yönetmemiz (error handling) gerekir.

 <img src="https://cdn.discordapp.com/attachments/750658674078253158/821563701114961950/i-swear-handsome-young-man-with-neutral-smile-blue-polo-shirt-with-hand-chest-giving-oath_146259-539.jpg"  style="width:500px">

## Callback'ten farkı nedir?

Callback, en basit haliyle herhangi bir fonksiyona parametre olarak verdiğimiz ve sonra geri çağıracağımız fonksiyonlara denir.

Callback başlıca dezavantajlara sahiptir bunlar;

- Callback’in beklenenden erken çağırılması
- Callback’in hiç çağırılmaması
- Callback’in beklenilenden az veya çok çağırılması
- Gerekli parametreleri doğru bir şekilde alamaması
- Hataların yutulması

Promise, callback’lerin sıkıntılı yönlerini düzeltmek amacıyla önerilmiş bir yapıdır. Bunlar;

- Promise istenilen görevi yerine getirdiğinde değeri değişmez (immutable)
- Sadece bir kere başarıya (resolved) ulaşır, veya başarısız (rejected) olur.
- Öngörülemeyen hatalar otomatik olarak Promise’i başarısız (rejected) sonuca - götürür. Bu da hataları kontrol etme noktasında faydalıdır.
- Yapısı gereği, gelecekteki bir değerin göstergesi olduğundan daha güvenilirdir.

Promise fonksiyonuna açıklayıcı bir örnek kod bloğu olarak;

``` js
const soz = new Promise(function(resolve, reject){
  if (herseyYolunda) {
    resolve('İşlem tamam!');
  } else {
    reject('Bir sıkıntı var...');
  }
})

soz.then(function(cevap){
  console.log(cevap) // 'İşlem tamam!' yazısını basar
}).catch(function(hata){
  console.log(hata) // 'Bir sıkıntı var...' yazısını basar
})
```

*Özgün Bal'dan esinlenilmiştir*

verilebilir.

## Promise zincirleri

Promise yapısı gereği asenkrondur, bu yüzden sıralı asenkron işlemlerinin birbirlerini beklemelerini istediğimiz durumlarda promise zinciri diyebildiğimiz şu yapıları kurmamız gerekir;

``` js
asenkronIslem()
  .then(sonuc => {
    return baskaAsenkronIslem(sonuc);
  })
  .then(zincirSonuc => {
    return zincirSonuc.json();
  })
  .catch(hata => {
    console.log(hata);
  });
```

*Özgün Bal'dan esinlenilmiştir*

Promise Zincirleri;


- Birden fazla .then() arka arkaya eklenerek oluşturulur.

- Zinciri başlatan bir promise olduğu gibi .then() içindeki fonksiyonların dönüş  değeri de promise olur. return değeri promise’leştirilerek zincirin diğer  halkasına aktarılır. Bu yüzden zincirin her bir halkasını promise okuyan ve  promise çıktısı oluşturan bir yapı olarak düşünebiliriz.

- Hataların yakalanması için tek bir .catch() yeterlidir. Zincir içerisinde ne zaman başarısız (rejected) bir promise veya beklenmedik bir hata oluşursa,  sonrasındaki .then() halkaları atlanılarak .catch() içerisindeki fonksiyon çalışır. asenkronIslem, baskaAsenkronIslem, birinci veya ikinci .then()’in hatalı  sonuçlanması konsola hata mesajının basılması ile sonuçlanır.

## Promise Metodları

Promise nesnesinin kendine ait 4 tane metodu bulunmaktadır, bunlar;


- Promise.resolve(): Verilen değeri, başarılı sonuçlanmış promise haline getirir. .then() içindeki fonksiyonların dönüş değeri kendiliğinden promise haline getirilir demiştik. Bu durumu ;

``` js
return Promise.resolve(donusDegeri);
```

 şeklinde de düşünebiliriz.

- Promise.reject(): Verilen değer, hata mesajı olacak şekilde başarısız(rejected) olmuş bir promise nesnesi döndürür.

- Promise.all(): Bu metodun kullanılma amacını, paralel olarak gerçekleştirilen asenkron işlemlerin hepsinin bitip, bitmediği anlamak olarak tanımlayabiliriz. Birbirini beklemeyen asenkron işlemleri (promise’leri) zincirlersek toplam gerçekleşme süresini uzatmış oluruz. Hem bekleyen tüm işlemlerin bittiğinden emin olmak hem de bunu promise kullanarak yapabilmek Promise.all() ile mümkün. Dizideki tüm promise’ler başarılı(resolved) olduğunda tuttukları değerler de dizi halinde kullanıcıya döner. Eğer dizideki herhangi bir promise başarısız(rejected) olursa, Promise.all() sonucu oluşan promise de başarısız(rejected) olur.

- Promise.race(): Bu metod ise adından anlaşılacağı gibi dizi içerisindeki promise’lerin yarıştırılmasıdır. Galip olan, yani en hızlı sonuca ulaşan promise dönüş değeri olarak alınır. Yalnız başarılı(resolved) veya başarısız (rejected) sonuçlanması sonucu etkilemez. Gelecekteki vaat edilen değerine (istenilen değer veya hata mesajı) ilk ulaşan promise yarışın kazananı olur.

Örnek Kullanımları; 

``` js
// Anında başarıya ulaşan(resolve) promise nesnesi
const basarili = Promise.resolve(42);

// Anında başarısız olan(reject) promise nesnesi
const basarisiz = Promise.reject('Tüh ya');

// Promise'lerden oluşan bir dizinin gelecekteki değerlerinin 
// hepsinin başarılı sonuçlanması için oluşturulan promise nesnesi 
const tumIslerBitti = Promise.all([promise1, promise2, ...]);

// Promise dizisi içinden en hızlı başarılı/başarısız 
// olan değeri tutan promise nesnesi
const enHizliYapan = Promise.race(promiseDizisi)
```
*Özgün Bal'dan esinlenilmiştir*

Yazan: Stajyer Melih FIRAT