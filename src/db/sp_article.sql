create procedure addOrEditArticle(
	IN _id INT,
    IN _description varchar(50),
    IN _model varchar(20),
    IN _stock varchar(5),
    IN _price double
)

begin
	if _id = 0 then
    insert into articles (description,model,stock, price)
    values (_description,_model,_stock,_price);
    
    set _id = last_insert_id();
    else 
    update articles
    set
		description = _description,
        model = _model,
        stock = _stock,
        price = _price
        where id = _id;
        end if;
        
        select _id as id;
        
end