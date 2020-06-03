## Employee Data GET & POST Api

### Can post employee details
>billeasy-api.herokuapp.com/api/postEmp
There are 3 tables present in the project.
For online postgres database I have use port no 5432.

Employee :
1)EmpId:It is an auto generated field having integer datatype.It is working as a primary key.It will start from 1.
2) email:It is accessible by user.It takes STRING.
3)firstName:Employees first name will be added as a STRING.
4)lastName: Employees first name will be added as a STRING.
5)deptId: It is working as a Foreign key.It takes INTEGER as a datatype.
6)locId: It is giving information about the location which have an INTEGER as a datatype.
     
2)Department:
1)deptId:It is working as a Foreign key.It takes INTEGER as a datatype.Which will help us to join the table.
2)deptName:It is showing the name of department related to deptid.It takes string as a datatype.
3)deptCity: It shows the department location or city in which department located.

3)location:
1)locId: It shows the location Id and having an integer as a datatype.
2)cityName:It shows the city which is related to locid.



### Can get Employee Details By Passing EmpID
>billeasy-api.herokuapp.com/api/getEmp/:id

After passing an empId in the URL we will get an output as EmpId,firstname,lastnamea,deptId,deptName(As deptname we will not have in first table sequelize automatically join the table by using left outer join and return the deptname also.),locId and city Name.

I have use sequelize ORM for query generation.









