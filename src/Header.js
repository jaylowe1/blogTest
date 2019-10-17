import React from 'react';
import Texty from 'rc-texty';

function Header() {
    return(
        <div>
            <div className="parallax">
                <Texty type="alpha" mode="random">BAMF Blog Demo</Texty>
                <Texty type="alpha" mode="random">Representing millenial families in the Bay Area</Texty>
            </div>
        </div>
    );
}
export default Header;