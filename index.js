function DisplayInConsoleUTF8_256bitMAX()
{
    var     int;
    var     TableUTF_eight; // UTF-8 //there is 256 possibilites of combining 0 and 1 on a range of 8 slots. like 8bit format 00000000 or 2^8 possibilites 
    var     HexadecimalString;
    var     CharFromHexadecimal;
    var     CharToHexadecimal;

    int = 0;
    TableUTF_eight = 256; // UTF-8
    binaryCode = '';

    while (int < TableUTF_eight)
    {
        console.log("for int", int);
        console.log("binary code is :", transformIntToBinaryString(int));
        //console.log("binary code is : ", int >> 7 & 1, int >> 6 & 1, int >> 5 & 1, int >> 4 & 1, int >> 3 & 1, int >> 2 & 1, int >> 1 & 1, int >> 0 & 1);
        
        HexadecimalString = "0x" + int.toString(16).padStart(2, '0'); // 16 for hexadecimal
        console.log("hexadimal code is :", HexadecimalString);

        CharFromHexadecimal = String.fromCharCode(HexadecimalString);
        console.log("fromacode :", CharFromHexadecimal);

        CharToHexadecimal = CharFromHexadecimal.toString(16);
        console.log("hex to char ", CharToHexadecimal);
        int++;
    }
}

function transformIntToBinaryString(int)
{
    binaryCode = '';
    for (let  eihtBites = 7; eihtBites >= 0 ; eihtBites--)
    {
        binaryCode += `${(int >> eihtBites) & 1}`;
    }
    return(binaryCode);
}

DisplayInConsoleUTF8_256bitMAX();


//https://www.w3schools.com/js/js_bitwise.asp
//https://cs.lmu.edu/~ray/notes/charenc/
//https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript

/*
Quick RECAP - Breakdown the code 

8     4     2     1   (place values)
1     1     0     1   (binary for 13) 
= 13

 in 7bites = 0001101 | is equal 13.

    13 = 1 * 8 + 1 * 4 + 0 * 2 + 1 * 1
    = 8 + 4 + 1
    = 13
   
--------

How  to get binary from int value 
    a & b => '&' means
    
    if  a   &   b        
        0   &   0 = 0 
        0   &   1 = 0
        1   &   0 = 0
        1   &   1 = 1 !! Like that if int binary idx is 1 we return it thanks to comparaison & 1 ! otherwise 0 


    int '>>' int( move binary code to next int)

    if a is an int '6' its binary code is  0 0 0 0 0 1 1 0
    with '>>' we indicate the shift like we would use a writing machine
    in a decrementing loop of 7 for 7bites 

    -first loop (! only check last number in loop) - this loop is for an int 6 
    int(6) >> 7 =               0
    int(6) >> 6 =             0 0
    int(6) >> 5 =           0 0 0
    int(6) >> 4 =         0 0 0 0
    int(6) >> 3 =       0 0 0 0 1
    int(6) >> 2 =     0 0 0 0 1 1
    int(6) >> 1 =   0 0 0 0 1 1 0
    int(6) >> 0 = 0 0 0 0 0 1 1 0


*/