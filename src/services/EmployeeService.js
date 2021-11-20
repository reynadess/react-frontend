import axios from 'axios';
import axois from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee-management";

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

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + `/employees/${id}`);
    }
}

export default new EmployeeService()