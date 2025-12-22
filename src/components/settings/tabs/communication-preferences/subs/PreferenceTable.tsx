import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import ScrollArea from "@/components/shared/ScrollArea";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableCell from "@/components/shared/table/TableCell";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import { Checkbox } from "@/components/ui/checkbox";
import Typography from "@/components/ui/typography";

const PreferenceTable = () => {
  return (
    <ScrollArea>
      <Table className="min-w-[600px]">
        <TableHeader>
          <TableRow className="">
            {["", "Email", "Slack", "Whats App"].map((item, index) => {
              return (
                <TableCell key={index} as="th">
                  <Typography variant="small">{item}</Typography>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((item: any, index: number) => {
            return (
              <TableRow key={index} className={""}>
                <TableCell as="td" className=" h-[50px]">
                  <Typography color="primary">{item.name}</Typography>
                </TableCell>
                <TableCell as="td" className=" h-[50px]">
                  {item.email}
                </TableCell>
                <TableCell as="td" className=" h-[50px]">
                  {item.slack}
                </TableCell>
                <TableCell as="td" className=" h-[50px]">
                  {item.whatssapp}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default PreferenceTable;

const features = [
  {
    name: "New features",
    whatssapp: <Checkbox />,
    email: <Checkbox />,
    slack: <Checkbox />,
  },
  {
    name: "Marketing communications",
    whatssapp: <Checkbox />,
    email: <Checkbox />,
    slack: <Checkbox />,
  },
  {
    name: "Reports",
    whatssapp: "-",
    email: <InputHelpTooltip helperText="Reports" />,
    slack: "-",
  },
  {
    name: "Alerts",
    whatssapp: "-",
    email: <InputHelpTooltip helperText="Alerts" />,
    slack: "-",
  },
  {
    name: "Repricing",
    whatssapp: "-",
    email: <InputHelpTooltip helperText="Repricing" />,
    slack: "-",
  },
];
