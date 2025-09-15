import '../styles/cta.css';

const Ctasecc = () => {
    return (
        <section class="cta">
            <div class="container">
                <div class="cta-content">
                    <h2>Zarafetin Dokunuşunu Hissedin</h2>
                    <p>ASAF BEY ile her gün yeni bir hikaye yazın</p>
                    <button
                        type="button"
                        className="cta-button"
                        onClick={() => {
                            const el = document.getElementById('sec_header');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Koleksiyonu Keşfedin
                    </button>
                </div>
            </div>
        </section>
    
    ) ;
} ;

export default Ctasecc;