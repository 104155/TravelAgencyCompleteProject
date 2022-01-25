// export const staticInfo: {
//     companyName: string,
//     companyLogo: string,
//     copyright: string
// } = {
//     companyName: "travelin' bone",
//     companyLogo: "../../assets/img/companyLogo.png",
//     copyright: "\u00A9" + "Martin Obermayer 2021"
// }


export class StaticInfo {
    private static companyName: string = "travel green";
    private static companyLogo: string = "../../assets/img/companyLogo.png";
    private static copyright: string = "\u00A9" + "Martin Oberamyer 2021. All rights reserved.";

    public static getCompanyName(): string {
        return StaticInfo.companyName;
    }

    public static getLogo(): string {
        return StaticInfo.companyLogo;
    }

    public static getCopyright(): string {
        return StaticInfo.copyright;
    }
}