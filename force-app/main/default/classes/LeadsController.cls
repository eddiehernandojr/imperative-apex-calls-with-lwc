public with sharing class LeadsController {
    @AuraEnabled(cacheable=true)
    public static List<Lead> getAllLeads() {
        return [
            SELECT Name, Company, Email, Phone, Status
            FROM Lead
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> getOpenNotContactedLeads() {
        return [
            SELECT Name, Company, Email, Phone, Status
            FROM Lead
            WHERE Status = 'Open - Not Contacted'
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> getWorkingContactedLeads() {
        return [
            SELECT Name, Company, Email, Phone, Status
            FROM Lead
            WHERE Status = 'Working - Contacted'
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> getClosedConvertedLeads() {
        return [
            SELECT Name, Company, Email, Phone, Status 
            FROM Lead
            WHERE Status = 'Closed - Converted'
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> getClosedNotConvertedLeads() {
        return [
            SELECT Name, Company, Email, Phone, Status
            FROM Lead
            WHERE Status = 'Closed - Not Converted'
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}
