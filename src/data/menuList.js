let menuList = [
  {
    type: 'Pizza',
    name: 'Barbekü',
    desc: 'Sulu tavuk fileto, domuz pastırması, mozzarella peyniri ve baharatlı barbekü soslu kırmızı soğan',
    price: 200 * 8,
    img: require('../images/p1.png'),
  },
  {
    type: 'Pizza',
    name: 'Biber',
    desc: 'Jambon ve yumuşacık mozzarella peyniri, pepperoni sosis, maydanoz',
    price: 200 * 9,
    img: require('../images/p2.png'),
  },
  {
    type: 'Pizza',
    name: 'Peynirli Tavuk',
    desc: 'Parmegiano soslu sulu tavuk, hoş kokulu gouda, yumuşak mozzarella ve susam tohumları',
    price: 200 * 11,
    img: require('../images/p3.png'),
  },
  {
    type: 'Pizza',
    name: 'Avrupalı',
    desc: 'Mozzarella peyniri, dolmalık biber, servelat, imza domates sosu',
    price: 200 * 10,
    img: require('../images/p4.png'),
  },
  {
    type: 'Pizza',
    name: 'İtalyan',
    desc: 'Mozzarella peyniri, jambon, mantar, özel sos, maydanoz',
    price: 200 * 11,
    img: require('../images/p5.png'),
  },
  {
    type: 'Salata',
    name: 'Karidesli Sezar',
    desc: 'sulu çıtır karidesli',
    price: 200 * 12,
    img: require('../images/s1.png'),
  },
  {
    type: 'Salata',
    name: 'Sezar',
    desc: 'Iceberg marul, çeri domates, kızarmış tavuk fileto, Parmesa peyniri',
    price: 200 * 11,
    img: require('../images/s2.png'),
  },
  {
    type: 'Salata',
    name: 'Mantar Sepeti Salatası',
    desc: 'panelenmiş tavuk fileto, haşlanmış yumurta, mantar turşusu, haşlanmış patates, salatalık turşusu, mayonez',
    price: 200 * 12,
    img: require('../images/s3.png'),
  },
  {
    type: 'Salata',
    name: 'Cole Yavaş Salata',
    desc: 'Beyaz lahana, kırmızı lahana, taze havuç, özel sos',
    price: 200 * 10,
    img: require('../images/s4.png'),
  },
  {
    type: 'Salata',
    name: 'Otlu kruton "Zhar Pizza"',
    desc: 'Bitkiler ile çıtır çıtır ve güzel kokulu krakerler. Salatalarımıza harika bir katkı!',
    price: 200 * 12,
    img: require('../images/s5.png'),
  },
  {
    type: 'Atıştırmalıklar',
    name: 'Patates kızartması',
    desc: 'Çıtır çıtır olana kadar derin yağda kızartılmış ve üzerine hafifçe tuz serpilmiş patates çubukları',
    price: 200 * 5,
    img: require('../images/z1.png'),
  },
  {
    type: 'Atıştırmalıklar',
    name: 'Ekmekli Karides',
    desc: 'panelenmiş taze, hoş kokulu karides',
    price: 200 * 10,
    img: require('../images/z2.png'),
  },
  {
    type: 'Atıştırmalıklar',
    name: 'Pastırmalı Patates Kızartması',
    desc: 'Pastırmalı ve soslu patates kızartması',
    price: 200 * 9,
    img: require('../images/z3.png'),
  },
  {
    type: 'Atıştırmalıklar',
    name: 'Mozzarella Çubukları',
    desc: 'Çıtır Kızarmış Mozzarella Peyniri Çubukları',
    price: 200 * 10,
    img: require('../images/z4.png'),
  },
  {
    type: 'Atıştırmalıklar',
    name: 'Soğan halkaları',
    desc: 'Kızarmış soğan halkası',
    price: 200 * 9,
    img: require('../images/z5.png'),
  },
  {
    type: 'Sepetler',
    name: 'Sepet Nazik',
    desc: '6 barbekü kanadı, 4 şerit, patates kızartması.',
    price: 200 * 9,
    img: require('../images/b1.png'),
  },
  {
    type: 'Sepetler',
    name: 'Atıştırmalık Sepeti',
    desc:
      'En sevdiğiniz atıştırmalıklarla dolu bir sepet! - çıtır soğan halkaları - sulu' +
      ' külçeler - altın patates kızartması',
    price: 200 * 9,
    img: require('../images/b2.png'),
  },
  {
    type: 'Sepetler',
    name: 'Atıştırmalıklar içeren sepet + seçtiğiniz 0,5 l içecek',
    desc:
      'Atıştırmalıklar + içecek şişesi içeren sepet. Dobry Orange / Dobry Cola / Dobry' +
      ' Lemon-Lime / Dobry Mango-Passion Fruit arasından seçim yapmak için 0,5 l',
    price: 200 * 9,
    img: require('../images/b3.png'),
  },
  {
    type: 'Sepetler',
    name: 'Barbekü kanatlı sepet 17 adet',
    desc: 'Mangalda tavuk kanadı 17 parça, ekmeklik, baharatlar',
    price: 200 * 9,
    img: require('../images/b4.png'),
  },
  {
    type: 'Sepetler',
    name: 'Baharatlı kanatlı sepet 21 adet',
    desc: 'Tavuk kanadı 21 parça, ekmeklik, baharatlar',
    price: 20 * 8,
    img: require('../images/b5.png'),
  },
  {
    type: 'İçecekler',
    name: 'Richtea yeşil çay mango 0.5',
    desc: 'Mango aromalı buzlu yeşil çay',
    price: 20 * 9,
    img: require('../images/n1.png'),
  },
  {
    type: 'İçecekler',
    name: 'Richtea yeşil çay 0.5',
    desc: 'Soğuk yeşil çay',
    price: 20 * 9,
    img: require('../images/n2.png'),
  },
  {
    type: 'İçecekler',
    name: 'Richtea siyah çay limonu 0.5',
    desc: 'Limonlu buzlu siyah çay',
    price: 20 * 11,
    img: require('../images/n3.png'),
  },
  {
    type: 'İçecekler',
    name: 'Richtea siyah çay şeftali 0.5',
    desc: 'Şeftali aromalı buzlu siyah çay',
    price: 20 * 11,
    img: require('../images/n4.png'),
  },
  {
    type: 'İçecekler',
    name: 'Pulpy Juice 0,45 l Portakal',
    desc: 'Arzunuza göre soğutulmuş ve oda sıcaklığında olabilir',
    price: 20 * 10,
    img: require('../images/n5.png'),
  },
];

menuList = menuList.map(el => {
  return {
    ...el,
    id: Math.random(),
    added: false,
    count: 1,
  };
});

export default menuList;
