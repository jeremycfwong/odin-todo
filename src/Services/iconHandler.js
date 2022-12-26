function iconHandler(context){
    switch(context){
        case('General'):
            return `<svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"><path fill="#000000" 
            d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`
        case('Task Today'):
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#000000" d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" />
            </svg>`
        case('This Week'):
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#000000" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
             </svg>`
        case('Add'):
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#000000" d="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z" />
            </svg>`
        default:
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#000000" d="M20 6H4C3.45 6 3 6.45 3 7V8C3 8.55 3.45 9 4 9H5V18H19V9H20C20.55 9 21 8.55 21 8V7C21 6.45 20.55 6 20 6M17 16H7V9H17V16Z" />
            </svg>`
    }
  

}

export {iconHandler}