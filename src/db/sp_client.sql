create procedure addOrEditUser(
	IN _id INT,
    IN _name varchar(45),
    IN _lastname varchar(20),
    IN _motherlastname varchar(20),
    IN _rfc varchar(13)
)
begin
	if _id = 0 then
    insert into user (name,lastname,motherlastname, rfc)
    values (_name,_lastname,_motherlastname,_rfc);
    
    set _id = last_insert_id();
    else 
    update user
    set
		name = _name,
        lastname = _lastname,
        motherlastname = _motherlastname,
        rfc = _rfc
        where id = _id;
        end if;
        
        select _id as id;
        
end