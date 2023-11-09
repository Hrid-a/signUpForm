import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { toast, Toaster } from "sonner";
import Button from "./Button";
import FormField from "./FormField";
import { inputs, schema } from "../utils/data";


const Form = () => {
    const { register, formState, handleSubmit, reset } = useForm({
        resolver: valibotResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            possword: ""
        }
    });
    // phone number ^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g


    const submit = (data) => {
        console.log(data);
        toast.success("Your form has been submitted successfully");
        reset();
    }

    const errorList = Object.values(formState.errors)
    if (errorList.length) {
        toast.error(errorList[0].message);
    }

    return (
        <div className="space-y-4">
            <Button className={"bg-base-accent"} >
                <span>
                    Try it free 7 days
                </span>
                <span className="opacity-75 font-normal text-sm">
                    then $20/mo. thereafter
                </span>
            </Button>
            <section className="px-6 py-4 bg-white/100 rounded-lg">
                <Toaster richColors position="top-center" />
                <form onSubmit={handleSubmit((data) => submit(data))} className="space-y-4 py-1">
                    {inputs.map(input => <FormField key={input.id} register={register} {...input} />)}

                    <Button className={"bg-base-primary-green"}>
                        <span>Claim your free trial</span>
                    </Button>
                </form>

            </section>
        </div>
    )
}

export default Form