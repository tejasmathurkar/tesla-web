f = open("alumnidata.tsv", "r")

first = True
headers = None
finalData = []
need = ['Name', 'Year of passing', 'Branch', 'Role in team', 'LinkedIn ID', 'Sub system which you have worked in', 'Current job ',
        "Current job company's name", "Current job company's location (city)", 'Role in the team', 'Email ID']
for c in f.readlines():
    if(first):
        headers = c.split("\t")
        print(headers)
        first = False
    else:
        dd = dict()
        x = c.split("\t")
        for i, d in enumerate(x):
            if(headers[i] in need):
                dd[headers[i]] = d

        finalData.append(dd)
print(finalData)
