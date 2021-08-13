import axois from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1";

class EmployeeService {

    getEmployees() {
        return axois.get(EMPLOYEE_API_BASE_URL + '/employees');
    }
}

export default new EmployeeService()