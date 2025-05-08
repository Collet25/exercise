numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
result = {}
checknum = numbers[0]

for i in range(len(numbers)):
    count = 0
    if checknum == numbers[i]:
        count += 1
        