import { RowLayoutProps } from "@widgets-resources/piw-utils";

export const getPreview = (): RowLayoutProps => ({
    type: "RowLayout",
    borders: false,
    padding: 8,
    columnSize: "grow",
    children: [
        {
            type: "Image",
            document: require("./assets/StructurePreviewActivityIndicatorPrimary.svg"),
            data: "",
            width: 24,
            height: 24,
            padding: 8
        }
    ]
});
