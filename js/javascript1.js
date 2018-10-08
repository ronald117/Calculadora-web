y=""
function mensaje(x)
{
	
	if(x=='C')	
	{
	y=""
	eti1.innerHTML=y
    eti2.innerHTML=oo
	}
	else 
	{
	y=y+x
	eti1.innerHTML=y
	}

}
function batras()
{
y=y-x
	eti1.innerHTML=y
	
}

function borradot()
{
y=""
dato1=""
oo=""
res=""
eti1.innerHTML="0"
eti2.innerHTML="."
	
}

function cambio()
{
res=res*-1	
eti1.innerHTML=res	
}

function operacion(o)
{

dato1=parseInt(y)

if (o=='+')
{
oo='+'
eti2.innerHTML=oo
res=dato1
}
else
if(o=='-')

{
oo='-'
eti2.innerHTML=oo
res=dato1
}
else
if(o=='*')
{
oo='*'
eti2.innerHTML=oo
res=dato1
}
else
if(o=='/')
{
oo='/'
eti2.innerHTML=oo
res=dato1
}
y=""
}

function resultado()
{

dato1=parseInt(y)



if (oo=='+')
{
res=res+dato1
}
else
if(oo=='-')
{
res=res-dato1
}
else
if(oo=='*')
{
res=res*dato1
}
else
if(oo=='/')
{
res=res/dato1
}
else
{
}
eti1.innerHTML=res
oo=''
eti2.innerHTML=oo
y=""
}
