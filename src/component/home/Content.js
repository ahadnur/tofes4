import '../Styles/home/content.css'


export const Content = () => {
    return (
        
        <div className="content-wrapper" style={{ 
            backgroundImage: `url('images/oref_hp_bg.png')`,
            objectFit: 'contain'
        }}>
            <h1 className="content-heading">מערכת פיקוד העורף</h1>
            <h1 style={{ marginBottom: '50px' }}>לאישור בקשות להיתר בנייה</h1>
            <div className="content">
                <div className="right-content">
                    <div className="right-content-left">
                        <h2>אינך רשום למערכת?</h2>
                        <p>שלום רב! אנחנו מאוד שמחים לקבל אתכם למערכת...</p>
                        <button className="register__btn">חלה תקלה</button>
                    </div>
                    <div className="right-content-right">
                        <h2>כניסה למערכת למשתמש קיים</h2>
                        <input className="login__input" type="text" placeholder="מספר תעודת זהות" /><br />
                        <input className="login__input" type="text" placeholder="מספר טלפון נייד" /><br />
                        <button className="login__btn">התחבר</button>
                    </div>
                </div>
                <div className="left-content">
                    <h3>מערכת רישוי מהנדסים</h3>
                    <p>
                        בשל החגים הקרבים וכן עקב תחלואה גוברת בקרב אנשי המערך, יתכנו עיכובים בבדיקת התוכניות.
                        אנו עושים מאמצים לענות בהקדם.

                        ענף ההנדסה והרגולציה בפיקוד העורף מאחל לכם חג שמח ושנה טובה
                        תפוח בדבש</p>
                </div>
                
            </div>
        </div>
    )
}