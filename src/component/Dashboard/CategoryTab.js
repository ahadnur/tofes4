import React from 'react'
import { Nav } from 'react-bootstrap'

const CategoryTab = () => {
    return (
        <>
            <hr />
            <Nav className="justify-content-center" activeKey="/home" variant="tabs" style={{margin: "20px 0"}}>
                <Nav.Item>
                    <Nav.Link href="#">אדריכל</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מודד</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">נגישות</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">בטיחות</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מתכנן/יועץ מיזוג אויר</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מתכנן / יועץ מעליות</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מתכנן יועץ חשמל</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מתכננן שלד/קונסטרוקטור</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מהנדס של קבלן</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">קבלן מבצע</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">קבלן שלד</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מתקין מזגנים/מערכות קירור</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מתקין מערכת אב"כ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מתקין דוד שמש</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מתכן /יועץ פיתוח</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מתכנן/יועץ תנועה</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">ספק חלון ודלת ממד</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">כלונסאות</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">בטונים</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מערכת גילוי אש</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מערכת כבוי אש</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מערכות חשמל</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מערכות אינסטלציה פנים</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">מערכת אינסטלציה חוץ</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default CategoryTab
