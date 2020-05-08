export default class BaseColumn {
    header: string;
    field: string;

    constructor(header, field) {
        this.header = header;
        this.field = field;
    }
}