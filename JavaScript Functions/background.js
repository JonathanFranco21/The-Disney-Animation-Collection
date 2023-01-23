function pic() {
  var bgm= ['https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4FDF0428C513E93DC335D04B3A1C5DAEDC5675215698ACB83A7819C9544EDDA4', 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A826B63B6690D7A01D4BEA32B33CC099B2D2E79ED64F8A6F7A0257BB2395D5F4'];
  $('.random_bg').css({
    'background':'url('+bgm[Math.floor(Math.random()* bgm.length)]+') no-repeat',
    'background-size':'cover', 
    'background-repeat':'no-repeat',
    'background-attachment':'fixed',
  });
}
pic();