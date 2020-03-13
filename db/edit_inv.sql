update products
set name = $1, price = $2, image = $3
where id = $4;
select * from products;