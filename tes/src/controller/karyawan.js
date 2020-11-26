const helper = require('../helper/index.js');
const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('TEST Assessment');
const xlsxFile = require('read-excel-file/node');

module.exports = {
    postDataKaryawan: async (request, response) => {

        const { id, email, first_name, last_name, avatar } = request.body

        try {
            const setData = [{
                id,
                email,
                first_name,
                last_name,
                avatar
            }]
            // console.log(setData)

            const headingColumnNames = [
                "ID",
                "Email",
                "First Name",
                "Last Name",
                "Avatar"
            ]

            let headingColumnIndex = 1;
            headingColumnNames.forEach(heading => {
                ws.cell(1, headingColumnIndex++)
                    .string(heading)
            })

            let rowIndex = 2;
            setData.forEach(record => {
                let columnIndex = 1;
                Object.keys(record).forEach(columnName => {
                    ws.cell(rowIndex, columnIndex++)
                        .string(record[columnName])
                });
                rowIndex++;
            })

            // wb.write('Karyawan.xlsx');
            return helper.response(response, 200, "Success Download Data", wb.write('Karyawan.xlsx'))

        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },

    getDataKaryawan: async (request, response) => {
        xlsxFile('./Karyawan.xlsx').then((rows) => {
            const setData = {
                id: rows[1][0],
                email: rows[1][1],
                first_name: rows[1][2],
                last_name: rows[1][3],
                avatar: rows[1][4],
            }
            return helper.response(response, 200, "Success Get Data Karyawan", setData)
        }).catch((rows) => {
            return helper.response(response, 400, "Bad Request", error)
        })
    }
}