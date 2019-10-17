import React from 'react';
import skull from './skull.svg'
import { Card, Avatar } from 'antd';
import { OmitProps } from 'antd/lib/transfer/renderListBody';
import { blue } from 'ansi-colors';

const {Meta} = Card;

function CardR(props) {
    return(
        <div style={{padding: '30px'}}>
            <Card  
                hoverable 
                cover={
                    <img
                        src="/blue.png"
                        alt="example"   
                    />
            }>
                
                <Meta 
                    title={props.cardName} 
                    description="Description of Article" 
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    />
                    
            </Card>
        </div>
    );
}

export default CardR;