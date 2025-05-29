# Test info

- Name: test
- Location: E:\playwrightestscripts\tests\addemployee.spec.js:4:5

# Error details

```
Error: Timed out 15000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('heading', { name: 'Personal Details' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 15000ms
  - waiting for getByRole('heading', { name: 'Personal Details' })
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/374" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/374"

    at E:\playwrightestscripts\tests\addemployee.spec.js:17:73
```

# Page snapshot

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "搜索"
    - button ""
    - separator
    - list:
      - listitem:
        - link "系統管理員":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "人事管理":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "休假":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "時間":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "招聘":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "我的信息":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "表現":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "儀表板":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "激動":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "人事管理" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: QA Engineer
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: 配置 
      - listitem:
        - link "員工列表":
          - /url: "#"
      - listitem:
        - link "添加員工":
          - /url: "#"
      - listitem:
        - link "報表":
          - /url: "#"
      - button ""
- heading "sai s" [level=6]
- img "profile picture"
- tablist:
  - tab "個人資料":
    - link "個人資料":
      - /url: /web/index.php/pim/viewPersonalDetails/empNumber/374
  - tab "詳細聯繫方式":
    - link "詳細聯繫方式":
      - /url: /web/index.php/pim/contactDetails/empNumber/374
  - tab "緊急聯絡人":
    - link "緊急聯絡人":
      - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/374
  - tab "眷屬":
    - link "眷屬":
      - /url: /web/index.php/pim/viewDependents/empNumber/374
  - tab "入境事務處":
    - link "入境事務處":
      - /url: /web/index.php/pim/viewImmigration/empNumber/374
  - tab "工作":
    - link "工作":
      - /url: /web/index.php/pim/viewJobDetails/empNumber/374
  - tab "薪水":
    - link "薪水":
      - /url: /web/index.php/pim/viewSalaryList/empNumber/374
  - tab "直屬於":
    - link "直屬於":
      - /url: /web/index.php/pim/viewReportToDetails/empNumber/374
  - tab "資格":
    - link "資格":
      - /url: /web/index.php/pim/viewQualifications/empNumber/374
  - tab "會員資格":
    - link "會員資格":
      - /url: /web/index.php/pim/viewMemberships/empNumber/374
- heading "個人資料" [level=6]
- separator
- text: Employee Full Name*
- textbox "名字": sai
- textbox "中間名字"
- textbox "姓氏": s
- separator
- text: 員工編號
- textbox: "0575"
- text: 其他身分編號
- textbox
- text: Driver's許可證號
- textbox
- text: 許可證到期日期
- textbox "yyyy-dd-mm"
- text: 
- separator
- text: 國籍 -- Select --  婚姻狀況 -- Select --  出生日期
- textbox "yyyy-dd-mm"
- text:  性別
- radio "男"
- text: 男
- radio "女"
- text: 女
- separator
- paragraph: "* 需要"
- button "儲存"
- separator
- heading "自定義區域" [level=6]
- separator
- text: Blood Type -- Select --  Test_Field
- textbox
- separator
- button "儲存"
- separator
- heading "附件" [level=6]
- button " 添加"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " 文件名稱 描述 大小 輸入 添加日期 由...添加 動作":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "文件名稱"
      - columnheader "描述"
      - columnheader "大小"
      - columnheader "輸入"
      - columnheader "添加日期"
      - columnheader "由...添加"
      - columnheader "動作"
  - rowgroup
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | import logindata from "../testdata/login.json"
   4 | test('test', async ({ page }) => {
   5 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   6 |   await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
   7 |   await page.getByRole('textbox', { name: 'Password' }).click();
   8 |   await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
   9 |   await page.getByRole('button', { name: 'Login' }).click();
  10 |   await page.getByRole('link', { name: 'PIM' }).click();
  11 |   await page.getByRole('link', { name: 'Add Employee' }).click();
  12 |   await page.getByRole('textbox', { name: 'First Name' }).click();
  13 |   await page.getByRole('textbox', { name: 'First Name' }).fill('sai');
  14 |   await page.getByRole('textbox', { name: 'Last Name' }).click();
  15 |   await page.getByRole('textbox', { name: 'Last Name' }).fill('s');
  16 |   await page.getByRole('button', { name: 'Save' }).click();
> 17 |   await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
     |                                                                         ^ Error: Timed out 15000ms waiting for expect(locator).toBeVisible()
  18 | });
```