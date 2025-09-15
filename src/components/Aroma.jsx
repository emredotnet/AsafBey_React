import '../styles/aroma.css';

let ustnotalar = "Bergamot ve limon kabuğunun ferah esintisi, ilk anda sizi sarmalayarak günün enerjisini verir.";
let kalpnotalar = "Jasmin ve lavanta çiçeklerinin romantik uyumu, zarif ve büyüleyici bir atmosfer yaratır.";
let altnotalar = "Amber ve misk notaları, kalıcı ve derin bir iz bırakarak kişiliğinizi tamamlar.";

const Aroma = () => {
    return (
        <section id="sec_aroma" class="aroma">
            <div class="container">
                <h2 class="section-title">Aroma Profili</h2>
                <div class="aroma-notes">
                    <div class="note-card">
                        <div class="note-icon">🍋</div>
                        <h3>Üst Notalar</h3>
                        <p>{ustnotalar}</p>
                    </div>
                    <div class="note-card">
                        <div class="note-icon">💖</div>
                        <h3>Kalp Notalar</h3>
                        <p>{kalpnotalar}</p>
                    </div>
                    <div class="note-card">
                        <div class="note-icon">🌾</div>
                        <h3>Alt Notalar</h3>
                        <p>{altnotalar}</p>
                    </div>
                </div>
            </div>
        </section>
        );
}
export default Aroma;