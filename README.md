# Portfolyo Sitesi (statik sürüm)

Düz HTML, CSS ve JavaScript'ten oluşan, derleme gerektirmeyen portfolyo sitesi. GitHub Pages'te ücretsiz yayınlanabilir.

- Türkçe sürüm: `index.html`
- İngilizce sürüm: `en/index.html`

Siteyi yerelde görmek için `index.html` dosyasına çift tıklaman yeterli.

## GitHub Pages'te yayınlama

Kullanıcı adınla aynı adı taşıyan bir repo açarsan site `https://halilkakut.github.io` adresinde yayınlanır.

1. GitHub'da yeni bir repo oluştur: **New repository**. Adı `halilkakut.github.io` olsun, **Public** seç.
2. Bu klasörün **içindeki** dosyaları repoya yükle (klasörün kendisini ya da zip'i değil). Terminalden yapmak için bu klasörde şunları çalıştır:
   ```bash
   git init
   git add -A
   git commit -m "Portfolyo sitesi"
   git branch -M main
   git remote add origin https://github.com/halilkakut/halilkakut.github.io.git
   git push -u origin main
   ```
   Tarayıcıdan yüklemek istersen repo sayfasında **Add file → Upload files** yolunu izleyip `index.html`, `en`, `css`, `js` ve `img` öğelerini sürükle.
3. Repoda **Settings → Pages** bölümüne git. **Source** olarak **Deploy from a branch**, branch olarak **main** ve klasör olarak **/ (root)** seç, **Save** de.
4. Birkaç dakika sonra site yayında olur. Adres sayfanın üstünde görünür.

Repo adını farklı verirsen (örneğin `portfolio`) adres `https://halilkakut.github.io/portfolio/` olur. Dosya yolları göreli olduğu için site bu durumda da çalışır.

## İçeriği değiştirme

Metinler doğrudan `index.html` (Türkçe) ve `en/index.html` (İngilizce) dosyalarındadır. Bir bilgiyi değiştirirken iki dosyayı da güncelle. Fotoğrafı değiştirmek için `img/profil.jpg` dosyasının üzerine yaz. Renkler `css/site.css` dosyasının başındaki `:root` bölümünde.

## Kendi alan adını bağlama

Bir alan adın varsa **Settings → Pages → Custom domain** bölümüne yaz. GitHub'ın verdiği DNS kayıtlarını alan adı sağlayıcında tanımlaman gerekir.

## Not

E-posta adresi sayfada düz metin olarak yazılıdır, bu yüzden otomatik tarama yapan botlar bu adrese spam gönderebilir. İstemezsen e-postayı sayfadan kaldırıp yalnızca LinkedIn ve GitHub linklerini bırakabilirsin.
