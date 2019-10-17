import React from 'react'
import {Card} from 'antd-mobile'

function Mobile_card() {
    return(
        <Card>
            <Card.Header
            title="Blog Title Name"
            thumb="./red.png"
            />

            <Card.Body>
            <div>This is content of `Card`</div>
            </Card.Body>

            <Card.Footer content="footer content"/>
      </Card>
    );
}

export default Mobile_card;