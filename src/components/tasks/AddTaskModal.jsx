import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()

    const onCancel = () => {
        reset()
        setIsOpen(false)
    }

    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel()
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="dispatch">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                    <label htmlFor="title">Title</label>
                    <input
                        className="w-full rounded-md"
                        type="text"
                        id="title"
                        {...register("title", { required: true })}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="w-full rounded-md"
                        id="description"
                        {...register("description", { required: true })}
                    ></textarea>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="date">Date</label>
                    <input
                        className="w-full rounded-md"
                        type="date"
                        id="date"
                        {...register("date", { required: true })}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="assignedTo">Assign to</label>
                    <select
                        className="w-full rounded-md"
                        id="assignedTo"
                        {...register("assignedTo", { required: true })}
                    >
                        <option value="">Select a person</option>
                        <option value="Mir Hussain">Mir Hussain</option>
                        <option value="Rahat">Rahat</option>
                        <option value="Rashed">Rashed</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="priority">priority</label>
                    <select
                        className="w-full rounded-md"
                        id="priority"
                        {...register("priority", { required: true })}
                    >
                        <option value="">Select a priority</option>
                        <option value="high">high</option>
                        <option value="medium">medium</option>
                        <option value="low">low</option>
                    </select>
                </div>
                <div className="flex justify-end mt-4 space-x-4">
                    <button
                        type="button"
                        onClick={() => onCancel()}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
