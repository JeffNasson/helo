INSERT INTO users(username,password)
VALUES($1,$2);

select *
from users
ORDER BY id desc
LIMIT 1;