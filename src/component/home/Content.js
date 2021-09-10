import '../Styles/content.css'
export const Content = () => {
    return (
        
        <div className="content-wrapper" style={{ 
            backgroundImage: `url('images/oref_hp_bg.png')`,
            objectFit: 'contain'
        }}>
            <h1 className="content-heading">מערכת פיקוד העורף</h1>
            <h1 style={{ marginBottom: '20px' }}>לאישור בקשות להיתר בנייה</h1>
            <div className="content">
            <div className="right-content">
                    <div className="right-content-left">
                        <h2>אינך רשום למערכת?</h2>
                        <p>שלום רב! אנחנו מאוד שמחים לקבל אתכם למערכת...</p>
                        <button>חלה תקלה</button>
                    </div>
                    <div className="right-content-right">
                        <h2>כניסה למערכת למשתמש קיים</h2>
                        <input type="text" placeholder="מספר תעודת זהות" /><br />
                        <input type="text" placeholder="מספר טלפון נייד" /><br />
                        <button>התחבר</button>
                    </div>
                </div>
                <div className="left-content">
                    <h3>מערכת רישוי מהנדסים</h3>
                    <strong><p>
                        בשל החגים הקרבים וכן עקב תחלואה גוברת בקרב אנשי המערך, יתכנו עיכובים בבדיקת התוכניות.
                        אנו עושים מאמצים לענות בהקדם.

                        ענף ההנדסה והרגולציה בפיקוד העורף מאחל לכם חג שמח ושנה טובה
                        תפוח בדבש</p></strong>
                </div>
                
            </div>
        </div>
    )
}