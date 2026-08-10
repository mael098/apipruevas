BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[employee] (
    [employee_id] INT NOT NULL,
    [employee_name] NVARCHAR(1000) NOT NULL,
    [employee_last_name] NVARCHAR(1000) NOT NULL,
    [employee_second_last_name] NVARCHAR(1000),
    [employee_status] NVARCHAR(1000) NOT NULL,
    [rfc] NVARCHAR(1000),
    [curp] NVARCHAR(1000),
    [imss_number] NVARCHAR(1000),
    [employee_email] NVARCHAR(1000),
    [entry_date] NVARCHAR(1000),
    [birth_date] NVARCHAR(1000),
    [gender] NVARCHAR(1000),
    [cost_center_name] NVARCHAR(1000),
    [department_name] NVARCHAR(1000),
    [work_station_name] NVARCHAR(1000),
    [business_name] NVARCHAR(1000),
    [integrated_salary] FLOAT(53),
    [monthly_salary_avg] FLOAT(53),
    [termination_date] NVARCHAR(1000),
    CONSTRAINT [employee_pkey] PRIMARY KEY CLUSTERED ([employee_id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
