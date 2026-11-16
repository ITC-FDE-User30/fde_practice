print("Hello, World!")

print(5+3)
print("5+3")

#print different data types in a single print statement
print("store:", "Pune", "| orders today", 5+3 ) 


a = 8
b = 3
c = a + b
print(c)

name = "Jay"
print(type(name))
print(type(a))

print("sum of {} and {} is {}".format(a, b, c))
print( name )

emp_list = ["Jay", "John", "Jill", 18, 5.12, True, False]
print(emp_list)
emp_list.append("New Employee")
print(emp_list)


#Dictionary
emp_dict = {"name": "Jay", "age": 48, "height": 5.11, "is_employee": True}
print(emp_dict)

order = {
    "order_id": 1234,
    "customer_name": "John Doe",
    "items": ["item1", "item2", "item3"],

}
print(order)
order["qty"] = 5
print(order)


orders = [
    {"order_id": 1234, "customer_name": "John Doe", "items": ["item1", "item2"]},
    {"order_id": 5678, "customer_name": "Jane Smith", "items": ["item3", "item4"]},
    {"order_id": 9101, "customer_name": "Bob Johnson", "items": ["item5", "item6"]},
]
print(orders[2]["customer_name"])

for i in range(5):
    print(i)

l1 = ["apple", "banana", "cherry"]
for item in l1:
    print(item)


for i in range(1, 6):
    for j in range(1, 6):
        for k in range(1, 6):
            print(i, j, k)


