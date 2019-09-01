import TodoStatus from "./TodoStatus";

enum FilterStatus {
    ALL = undefined,
    ACTIVE = TodoStatus.ACTIVE,
    COMPLETED = TodoStatus.COMPLETED
}

export default FilterStatus