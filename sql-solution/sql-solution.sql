1. 
SELECT 
    ag.AGENT_CODE,
    ag.AGENT_NAME,
    SUM(o.ORD_AMOUNT) AS total_order_amount
FROM 
    agents ag
JOIN 
    customer cu ON ag.AGENT_CODE = cu.AGENT_CODE
JOIN 
    orders o ON cu.CUST_CODE = o.CUST_CODE
GROUP BY 
    ag.AGENT_CODE, ag.AGENT_NAME
ORDER BY 
    total_order_amount DESC
LIMIT 1;

Answer: [AGENT_CODE :A010,AGENT_NAME: Santakumar ,total_order_amount :17000.00 ]

2.
SELECT 
    c.CUST_CODE,
    c.CUST_NAME,
    SUM(o.ORD_AMOUNT) AS total_order_amount
FROM 
    customer c
JOIN 
    orders o ON c.CUST_CODE = o.CUST_CODE
GROUP BY 
    c.CUST_CODE, c.CUST_NAME
HAVING 
    total_order_amount > 5000.00
ORDER BY 
    total_order_amount DESC;

Answer:
[CUST_CODE : C00007, CUST_NAME: Ramanathan ,total_order_amount:10500.00]
[CUST_CODE : C00013, CUST_NAME: Holmes ,total_order_amount:6000.00]
[CUST_CODE : C00008, CUST_NAME: Karolina ,total_order_amount:5500.00]
[CUST_CODE : C00009, CUST_NAME: Ramesh ,total_order_amount:5200.00]

3.
SELECT 
    cu.AGENT_CODE,
    COUNT(o.ORD_NUM) AS total_orders
FROM 
    customer cu
JOIN 
    orders o ON cu.CUST_CODE = o.CUST_CODE
WHERE 
    YEAR(o.ORD_DATE) = 2008 AND MONTH(o.ORD_DATE) = 7
GROUP BY 
    cu.AGENT_CODE;

Answer:
[AGENT_CODE:A002 ,total_orders: 2]
[AGENT_CODE:A003 ,total_orders: 1]
[AGENT_CODE:A006 ,total_orders: 2]
[AGENT_CODE:A008 ,total_orders: 2]
[AGENT_CODE:A009 ,total_orders: 1]
[AGENT_CODE:A010 ,total_orders: 1]
[AGENT_CODE:A011 ,total_orders: 2]