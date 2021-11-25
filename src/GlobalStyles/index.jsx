const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
:root{
    --primary:#403CAA;
    --secondary:#11995E;
    --grey-100:#333333;
    --grey-50:#999999;
    --grey-0:#F5F5F5;
}
body {
    margin: 0;
    padding: 0;
    background-color: var(--primary);
    font-family: 'Inter', sans-serif;
    h1,h2,h3,h4{
        font-weight: bold;
    }
    h1{
        font-size:32px;
    }
    h2{
        font-size: 28px;
    }
    h3{
        font-size: 22px;
    }
    h4{
        font-size: 18px;
    }
    p{
        font-size: 14px;
    }
}

`

export default GlobalStyle