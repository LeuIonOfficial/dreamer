import { Fragment, useState, ReactNode } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";

interface IProps {
	children: ReactNode
}

const Modal = ({ children }: IProps) => {
	const [open, setOpen] = useState(true);

	const handleOpen = () => setOpen(!open);

	return (
		<Fragment>
			<Button onClick={handleOpen} variant="gradient">
				Open Dialog
			</Button>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>Its a simple dialog.</DialogHeader>
				<DialogBody divider>
					{children}
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="red"
						onClick={handleOpen}
						className="mr-1"
					>
						<span>Cancel</span>
					</Button>
					<Button variant="gradient" color="green" onClick={handleOpen}>
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</Fragment>
	);
}

export default Modal