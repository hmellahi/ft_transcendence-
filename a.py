# n = int(input())
# for i in range(n):
#     s = input()
#     print(''.join(c for i,c in enumerate(s) if c not in s[:i]))


foo = "mppmt"
result = "".join(dict.fromkeys(foo))
print(dict.fromkeys(foo))