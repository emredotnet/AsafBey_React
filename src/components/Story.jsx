import '../styles/story.css';
import image from '../assets/1kisa.png';

const Story = () => {
    return (
        <section id="sec_story" class="story">
            <div class="container">
                <h2 class="section-title">Bir Zarafet Hikayesi</h2>
                <div class="story-content">
                    <div class="story-text">
                        <p class="story-intro">1920'lerin İstanbul'unda, şehrin en seçkin mahallelerinden birinde yaşayan Asaf Bey, zarif tavırları ve mükemmeliyetçi kişiliğiyle tanınan bir beyefendiydi.</p>
                        
                        <p class="story-intro">Osmanlı geleneğinin son temsilcilerinden olan Asaf Bey, günlük yaşamında kullandığı her eşyadan kokuya, giyimden davranışlara kadar her detayda mükemmelliği arardı. Özellikle kullandığı kolonyalar, onun imza kokusunu oluşturan özel karışımlardı.</p>
                        
                        <p class="story-intro">Yıllar boyunca parfümörlerle çalışarak geliştirdiği bu eşsiz formül, bergamot ve lavantanın ferah notalarıyla başlar, kalp notalarında jasminin büyüleyici kokusunu yaşatır ve son olarak amber ve misk ile derin bir iz bırakırdı.</p>
                        
                        <p class="story-conclusion">Bugün, o unutulmaz kokunun sırrını modern dünyaya taşıyoruz. ASAF BEY, geçmişin zarafetini günümüzün kalitesiyle buluşturan bir miras kolonyasıdır.</p>
                    </div>
                    <div class="story-visual">
                        <div class="ornamental-frame">
                            <img src={image} alt="ASAF BEY Kolonya Detay" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;