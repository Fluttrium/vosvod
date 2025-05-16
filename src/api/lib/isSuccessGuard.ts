import {ActionResult} from "@/api/lib/handleAction";

export function isSuccess<T>(result: ActionResult<T>): result is { success: true } & T {
    return result.success === true;
}