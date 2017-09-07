# digital_root(16)
# => 1 + 6
# => 7

# digital_root(942)
# => 9 + 4 + 2
# => 15 ...
# => 1 + 5
# => 6

# digital_root(132189)
# => 1 + 3 + 2 + 1 + 8 + 9
# => 24 ...
# => 2 + 4
# => 6

#不转字符串
#超复杂
def digital_root(n):
    sum=0
    while n>=10:
        number=n%10
        sum=sum+number
        n=n//10
        if n<10 and n>=1:
            sum=sum+n
        if n<100 and n>10:
            number=n%10
            n=n//10
            sum=number+n+sum
    result=sum
    if result<10:
        return result
    while result>=10:
        n=result
        sum=0
        while n>=10:
            number=n%10
            sum=sum+number
            n=n//10
            if n<10 and n>=1:
                sum=sum+n
            if n<100 and n>10:
                number=n%10
                n=n//10
                sum=number+n+sum
        result=sum
    return result

#简单
    def digital_root(n):
    soma=0
    while n//10 != 0:
        soma = soma + n%10
        n = n//10
    soma = soma + n
    if soma//10 == 0:
        return soma
    else:
        return digital_root(soma)
        
#转字符串
def digital_root(n):
while n>10:
    n = sum([int(i) for i in str(n)])
return n