import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"

const Dropdown = () => {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger>
                <div className="p-2 border rounded-md">Select</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Economy</DropdownMenuItem>
                <DropdownMenuItem>Geography</DropdownMenuItem>
                <DropdownMenuItem>Culture</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown