import axois from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1";

class EmployeeService {

    getEmployees() {
        return axois.get(EMPLOYEE_API_BASE_URL + '/employees');
    }

    getEmployeeById(id) {
        return axois.get(EMPLOYEE_API_BASE_URL + `/employees/${id}`);
    }

    createEmployee(employee) {
        return axois.post(EMPLOYEE_API_BASE_URL + '/employees', employee);
    }

    updateEmployee(employee) {
        return axois.put(EMPLOYEE_API_BASE_URL + '/employees/'+ employee.id, employee);
    }
}

export default new EmployeeService()