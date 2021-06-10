# JSX Nedir?

<img src="https://cdn.discordapp.com/attachments/750658674078253158/852391561953149008/jsxornek1.png">

Resimde gördüğünüz kod nedir? HTML mi? Hayır. Dikkat ettiyseniz HTML'den farklı olarak "className" ibaresini görüyorsunuz.

JSX'de HTML elementlerine sınıf ismi vermek istersek class'ı kullanamayız çünkü class JavaScript içerisinde başka bir anlamda başka bir işlevde kullanılmaktadır böylelikle kendini ele verir. Bir JSX kodunu gördüğünüzde onu en kolay ayırt edeceğiniz nokta da haliyle budur.

JSX, İçinde JavaScript ifadeleri kullanabildiğimiz (değişken, fonksiyon vb.) React ile uygulama geliştirirken arayüz oluşturmamızı oldukça kolaylaştırmamıza olanak sağlayan bir JavaScript eklentisidir.

JSX'in temelinde JavaScript olduğundan değer isimlendirmeleri, satır arası CSS parametreleri vb. durumlarda "camelCase" kullanırız.

``` js
<p style={{backgroundColor:"black", color:"white"}}> Hello World! </p> 
```

gibi.

JSX kodlarımız aslında 
<img src="https://cdn.discordapp.com/attachments/750658674078253158/852391541373009950/2021-06-10-06-38-babeljs.io_1.png">

şeklindedir, fakat okuması anlaması ve geliştirmesi kolay olması açısından kolaylaştırılmış bir şekilde bize sunulur.

***
<p style="float:right">Melih FIRAT</p>