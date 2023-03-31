let add = 2;

for(let a = 1; a < 4109; a)
{if(a<4108){document.write("Number " + a + ", ");
    }
    else{document.write("Your final number is " + a);
    }
    a = a + add;
    add = add*2-1;
}